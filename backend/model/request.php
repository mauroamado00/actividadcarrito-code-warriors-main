<?php
    class Request{
        public $data;
        public $status;
        public $message;

        function __construct($data, $status, $message){
            $this->data = $data;
            $this->status = $status;
            $this->message = $message;
        }
    }

?>