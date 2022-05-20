<?php

use model\Model;

class CustomerService extends Model {

    // 建立客服紀錄，傳入member_id, cs_id, topic, product_id
    public function createCsRecord($param) {
        $member_id = $param['member_id'];
        $cs_id = $param['cs_id'];
        $topic = $param['topic'];
        $product_id = $param['product_id'];
        $sql = $this->insert(['member_id' => $member_id, 'cs_id' => $cs_id, 'topic' => $topic, 'product_id' => $product_id], 'cs_record');

        return $this->execute($sql);
    }

    public function searchMsgByMsgId($message_id) {
        $sql = $this->select('cs_message') . $this->where('message_id', '=', $message_id);

        return $this->execute($sql);
    }

    public function createCsMessage($param) {
        $cs_record_id = $param['cs_record_id'];
        $msg_content = $param['msg_content'];
        $msg_by = $param['msg_by'];
        $create_time = date("Y-m-d H:i:s");
        $msg_state = 'unread';
        $sql = $this->insert(['cs_record_id' => $cs_record_id, 'msg_content' => $msg_content, 'msg_by' => $msg_by, 'create_time' => $create_time, 'msg_state' => $msg_state], 'cs_message');

        $message_id = $this->execute($sql);
        return $this->searchMsgByMsgId($message_id);
    }

    public function readMsg($message_id) {
        $sql = $this->update(['msg_state' => 'read'], 'cs_message') . $this->where('message_id', '=', $message_id);

        $this->execute($sql);
    }

    public function searchUnreadMsg($param) {
        $cs_record_id = $param['cs_record_id'];
        $msg_by = $param['msg_by'];
        $sql = $this->select('cs_message') . $this->where('cs_record_id', '=', $cs_record_id) . $this->and('msg_by', '=', $msg_by) . $this->and('msg_state', '=', 'unread');

        $result = $this->execute($sql);
        foreach ($result as $value) {
            $this->readMsg($value['message_id']);
        }
        return $result;
    }
    
    public function searchMsgByCsRecId($param) {
        $cs_record_id = $param['cs_record_id'];
        $sql = $this->select('cs_message') . $this->where('cs_record_id', '=', $cs_record_id);
        
        $result = $this->execute($sql);
        foreach ($result as $value) {
            $this->readMsg($value['message_id']);
        }
        
        return $result;
    }
    
    }
}
