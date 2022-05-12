<?php

use model\Model;

class Member extends Model {
    protected $member_table = 'member';
    protected $member_account_table = 'member_account';

    public function login($param) {
        $account_data = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($account_data) == 1) {
            if ($account_data[0]['member_password'] == $param['member_password']) {
                // 登入成功
                return true;
            } else {
                // 帳號密碼錯誤登入失敗
                return false;
            }
        } else {
            // 帳號密碼錯誤登入失敗
            return false;
        }
    }

    public function register($param) {
        $email[] = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($email) == 1) {
            $member_sql = $this->insert(['member_name' => $param['member_name'], 'birthday' => $param['birthday'], 'phone_num' => $param['phone_num'], 'sex' => $param['sex'], 'credit_num' => $param['credit_num']], $this->member_table);
            $this->execute($member_sql);

            $result = $this->execute($this->select($this->member_table));
            $member_id = $result[count($result) - 1]['member_id'];
            $member_account_sql = $this->insert(['member_id' => $member_id, 'email' => $param['email'], 'member_password' => $param['member_password']], $this->member_account_table);
            $this->execute($member_account_sql);
            
            // 註冊成功
            return true;
        } else {
            // email重複註冊失敗
            return false;
        }
    }

    public function forgetPassword($param) {
        $account_data = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($account_data) == 1) {
            return true;
        } else {
            // 無此email
            return false;
        }
    }

    public function resetPassword($param) {
        $sql = $this->update(['member_password' => $param['new_password']], $this->member_account_table) . $this->where('member_id', '=', $param['member_id']);
        $this->execute($sql);
    }

    public function updateMemberInfo($param) {
        $sql = $this->update([$param['change_place'] => $param['change_text']], $this->member_table) . $this->where('member_id', '=', $param['member_id']);
        $this->execute($sql);
    }

    public function getMemberInfo() {
        $sql = $this->select($this->member_table);
        return $this->execute($sql);
    }
}
