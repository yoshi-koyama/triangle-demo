import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  return (
    <div className="App">
      <section id="form">
        <div class="container">
          <div class="panel-primary">
            <div class="panel-primary__heading">
              <h4>三角形問題フォーム</h4>
            </div>
            <form action="" method="post">
              <div class="form-group">
                <label class="col-md-4 control-label"><span class="notice">*</span>A辺の長さ</label>
                <div class="col-md-4">
                  <input id="length-a" name="length-a" placeholder="整数2桁までの数字" size="60" type="text" value="" />
                  <span class="error">未入力です。</span>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label"><span class="notice">*</span>B辺の長さ</label>
                <div class="col-md-4">
                  <input id="length-b" name="length-b" placeholder="整数2桁までの数字" size="60" type="text" value="" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-4 control-label"><span class="notice">*</span>C辺の長さ</label>
                <div class="col-md-4">
                  <input id="length-c" name="length-c" placeholder="整数2桁までの数字" size="60" type="text" value="" />
                </div>
              </div>
              <div class="panel-footer">
                <input type="submit" name="submitConfirm" value="送信内容を確認する" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
