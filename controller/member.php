<?php

use model\Model;
require_once "mailer.php";

class Member extends Model {
    protected $member_table = 'member';
    protected $member_account_table = 'member_account';

    public function login($param) {
        $account_data = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($account_data) == 1) {
            if ($account_data[0]['member_password'] == $param['member_password']) {
                // 登入成功
                $_SESSION['email'] = $account_data[0]['email'];
                $_SESSION['member_id'] = $account_data[0]['member_id'];
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


    public function logout() {
        session_destroy();
    }

    public function register($param) {
        $email[] = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($email[0]) == 0) {
            $member_sql = $this->insert(['member_name' => $param['member_name'], 'birthday' => $param['birthday'], 'phone_num' => $param['phone_num'], 'sex' => $param['sex'], 'credit_num' => $param['credit_num']], $this->member_table);
            $this->execute($member_sql);

            $result = $this->execute($this->select($this->member_table));
            $member_id = $result[count($result) - 1]['member_id'];
            $member_account_sql = $this->insert(['member_id' => $member_id, 'email' => $param['email'], 'member_password' => $param['member_password']], $this->member_account_table);
            return $this->execute($member_account_sql);
            // 註冊成功
        } else {
            // email重複註冊失敗
            return false;
        }
    }

    public function forgetPassword($param) {
        $mailer = new Mailer();
        $account_data = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($account_data) == 1) {
            $password = $this->execute($this->select($this->member_account_table, ['member_password']) . $this->where('email', '=', $param['email']));
            $confirm_number = (int)(crc32($password[0]['member_password']) / 10000);
            // 發送 confirm number email
            // mail($param['email'],'Pascal Store Forget Password Verification Code','Verification Code : ' . $confirm_number);
            // $mailer->send($param['email'], $confirm_number);
            return $confirm_number;
            // return true;
        } else {
            // 無此email
            return false;
        }
    }

    public function emailExist($param) {
        $account_data = $this->execute($this->select($this->member_account_table) . $this->where('email', '=', $param['email']));
        if (count($account_data) != 1) {
            return true;
        }
    }

    public function getConfirmNumber($param) {
        $email = $param['email'];
        $password = $this->execute($this->select($this->member_account_table, ['member_password']) . $this->where('email', '=', $email));
        $confirm_number = (int)(crc32($password[0]['member_password']) / 10000);
        return $confirm_number;
    }

    public function confirm($param) {
        $password = $this->execute($this->select($this->member_account_table, ['member_password']) . $this->where('email', '=', $param['email']));
        $confirm_number = (int)(crc32($password[0]['member_password']) / 10000);
        if ($param['confirmNumber'] == $confirm_number) {
            return true;
        } else {
            return false;
        }
    }

    public function resetPassword($param) {
        $email = $param['email'];
        $member_id = $this->execute($this->select($this->member_account_table, ['member_id']) . $this->where('email', '=', $email));
        $sql = $this->update(['member_password' => $param['new_password']], $this->member_account_table) . $this->where('member_id', '=', $member_id[0]['member_id']);
        return $this->execute($sql);
    }

    public function updateMemberInfo($param) {
        $sql = $this->update(['member_name' => $param['member_name'], 'birthday' => $param['birthday'], 'phone_num' => $param['phone_num'], 'sex' => $param['sex']], $this->member_table) . $this->where('member_id', '=', $_SESSION['member_id']);
        $this->execute($sql);
        $sql = $this->update(['member_password' => $param['member_password']], $this->member_account_table) . $this->where('member_id', '=', $_SESSION['member_id']);
        $this->execute($sql);
    }

    public function getAllMemberInfo() {
        $sql = $this->select($this->member_table);
        return $this->execute($sql);
    }

    public function getAllMemberAccount() {
        $sql = $this->select($this->member_account_table);
        return $this->execute($sql);
    }

    public function getMemberInfoById() {
        $sql = $this->select($this->member_table) . $this->where('member_id', '=', $_SESSION['member_id']);
        return $this->execute($sql);
    }

    public function getMemberInfo() {
        $sql = $this->select($this->member_table) . $this->where('member_id', '=', $_SESSION['member_id']);
        return $this->execute($sql);
    }

    public function getMemberAccountById() {
        $sql = $this->select($this->member_account_table) . $this->where('member_id', '=', $_SESSION['member_id']);
        return $this->execute($sql);
    }

    public function getMemberCredit() {
        $sql = $this->select($this->member_table, ['member_id']) . $this->where('credit_num', '>=', '80');
        return $this->execute($sql);
    }
}
