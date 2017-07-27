<?php
namespace app\index\controller;

class Goods extends Common
{
    public function goods_list(){
        echo '商品列表';

        $this->fetch();
    }


}
