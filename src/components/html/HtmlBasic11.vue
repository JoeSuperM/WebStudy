<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、H5拖放</h1>
      <p>拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。拖放是HTML5标准的组成部分：任何元素都是可拖放的。</p>
      <div class="code">
        <h3>把元素设置为可拖放的，draggable=&#34;true&#34;</h3>
        <p>&#60;img src=&#34;https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif&#34; draggable=&#34;true&#34; v-on:dragstart=&#34;drag&#34; id=&#34;drag1&#34; /&#62;</p>
        <h3>拖放的内容-ondragstart和setData()</h3>
        <p>
          <pre>
          allowDrop: function(ev) {
            ev.preventDefault();
          },
          drag: function(ev) {
            ev.dataTransfer.setData("Text", ev.target.id);
          }
        </pre>
        </p>
        <h3>拖到何处-ondragover</h3>
        <p>&#60;div id=&#34;div2&#34; v-on:drop=&#34;drop&#34; v-on:dragover=&#34;allowDrop&#34;&#62;&#60;/div&#62;</p>
        <h3>进行放置-ondrop</h3>
        <p>
          <pre>
       drop: function(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("Text");
          ev.target.appendChild(document.getElementById(data));
        }
       </pre>
        </p>
        <div id="div1" v-on:drop="drop" v-on:dragover="allowDrop">
          <img draggable="true" v-on:dragstart="drag" id="drag1" src="https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif">
        </div>
        <div id="div2" v-on:drop="drop" v-on:dragover="allowDrop">
        </div>
      </div>
      <h1>二、Web存储</h1>
      <p>通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。<br />
        在HTML5之前，应用程序数据只能存储在cookie中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。<br />与cookie不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。<br />
        本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。
      </p>
      <h2>HTML 本地存储对象</h2>
      <p>HTML 本地存储提供了两个在客户端存储数据的对象：<br />
        (1)window.localStorage - 存储没有截止日期的数据<br />
        (2)window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）<br />
        在使用本地存储时，请检测 localStorage 和 sessionStorage 的浏览器支持：<br />
        <pre>
          if (typeof(Storage) !== "undefined") {
              // 针对 localStorage/sessionStorage 的代码
          } else {
              // 抱歉！不支持 Web Storage ..
          }
        </pre>
      </p>
      <h2>localStorage对象</h2>
      <p>localStorage对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。</p>
      <div class="code">
        <p>
          <pre>
            // 存储
            localStorage.setItem("lastname", "Gates");
            // 取回
            document.getElementById("result").innerHTML = localStorage.getItem("lastname");
          </pre>
        </p>
      </div>
      <h2>sessionStorage对象</h2>
      <p>sessionStorage对象等同localStorage对象，不同之处在于只对一个session存储数据。如果用户关闭具体的浏览器标签页，数据也会被删除。</p>
      <div class="code">
        <p>
          <pre>
            // 存储
            sessionStorage.setItem("lastname", "Gates");
            // 取回
            document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
          </pre>
        </p>
      </div>
      <h2>演示存储实例</h2>
      <div class="code">
        <div>
          <div id="result"></div>
          <br />
          请输入Key：<input type="text" v-model="key" name="key">【{{key}}】<br />
          请输入Value:<input type="text" v-model="value" name="value">【{{value}}】
          <h3>LocalStorage实例</h3>
          <button v-on:click="saveLocal">保存(Local)</button>
          <button v-on:click="takeLocal">读取(Local)</button>
          <button v-on:click="deleteLocal">删除(Local)</button>
          <h3>SessionStorage实例</h3>
          <button v-on:click="saveSession">保存(Session)</button>
          <button v-on:click="takeSession">读取(Session)</button>
          <button v-on:click="deleteSession">删除(Session)</button>
        </div>
      </div>
      <h1>三、Web SQL数据库</h1>
      <p>Web SQL数据库API并不是HTML5规范的一部分，但是它是一个独立的规范，引入了一组使用SQL操作客户端数据库的APIs。</p>
      <h3>核心方法</h3>
      <ul>
        <li>openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。</li>
        <li>transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。</li>
        <li>executeSql：这个方法用于执行实际的SQL查询。</li>
      </ul>
      <h2>1、打开数据库</h2>
      <div class="code">
        <h3>接口参数与格式</h3>
        <p>openDatabase('数据库名称', '版本号', '描述文本', Integer(数据库大小）,function(回调)）</p>
        <p>比如：var db = openDatabase('mydb','1.0','My Test DB.', 2 * 1024);</p>
      </div>
      <h2>2、使用事务执行增删改查操作</h2>
      <div class="code">
        <h3>（1）创建数据库表</h3>
        <p>db.transaction(function (tx) { <br />
          &#160;&#160;&#160;&#160;tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');<br />
          });
        </p>
        <h3>（2）插入数据</h3>
        <p> db.transaction(function (tx) {<br />
          &#160;&#160;&#160;&#160;tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "周超的学习之路")');<br />
          &#160;&#160;&#160;&#160;tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.galaxywind.com")');<br />
          &#160;&#160;&#160;&#160;tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]);<br />
          });
        </p>
        <h3>（3）读取数据</h3>
        <p>
          db.transaction(function (tx) {<br />
          &#160;&#160;&#160;&#160;tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {<br />
          &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;//results.rows.length:表示记录条数<br />
          &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;//results.rows.item(i):表示第i条数据<br />
          &#160;&#160;&#160;&#160;}, null);<br />
          });
        </p>
        <h3>（4）删除记录</h3>
        <p>
          db.transaction(function (tx) {<br />
          &#160;&#160;&#160;&#160;tx.executeSql('DELETE FROM LOGS WHERE id=1');<br />
          &#160;&#160;&#160;&#160;tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);<br />
          });
        </p>
        <h3>（5）更新记录</h3>
        <p>
          db.transaction(function (tx) {<br />
          &#160;&#160;&#160;&#160;tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=2');<br />
          &#160;&#160;&#160;&#160;tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cc\' WHERE id=?', [id]);<br />
          });
        </p>
      </div>
      <h2>3、相关实例演示</h2>
      <div class="code">
        <table cellpadding="5" cellspacing="0" border="1" width="70%">
          <option>数据库中共有{{contact_size}}条数据</option>
          <tr class="table_head center" bgcolor="#3f3f3f">
            <th width="10%">编码(ID)</th>
            <th width="30%">姓名(Name)</th>
            <th width="30%">电话(Tel)</th>
          </tr>
          <tr class="center" v-for="contact in contacts" :key="contact.id">
            <td>{{contact.id}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
          </tr>
        </table>
        <h3>数据输入区域</h3>
        <div>
          <label>编码(ID)：</label>
          <input type="number" placeholder="编码(ID)" v-model="contact.id">
          <br />
          <label>姓名(Name)：</label>
          <input type="text" placeholder="姓名(Name)" v-model="contact.name">
          <br />
          <label>电话(Tel):</label>
          <input type="tel" placeholder="电话(Tel)" v-model="contact.tel">
        </div>
        <h3>操作控制区</h3>
        <div>
          <input type="button" value="创建数据库" v-on:click="createDB(true)">
          <input type="button" value="删除数据表" v-on:click="dropTable">
          <input type="button" value="插入指定数据" v-on:click="insertData">
          <input type="button" value="删除指定数据" v-on:click="deleteData">
          <input type="button" value="更新指定数据" v-on:click="updateData">
          <br /><br />
          <input type="button" value="查询所有数据" v-on:click="queryAllData">
          <input type="button" value="查询ID数据" v-on:click="queryDataByID">
          <input type="button" value="查询Name数据" v-on:click="queryDataByName">
          <input type="button" value="查询Tel数据" v-on:click="queryDataByTel">
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

#div1,
#div2 {
  width: 198px;
  height: 66px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

</style>
<script>
export default {
  name: 'HtmlBasic11',
  data() {
    return {
      title: 'HTML基础--H5拖放、Web存储、SQL数据库',
      key: 'key',
      value: '',
      dbHelper: null,
      contact_size: 0,
      contacts: [],
      contact: {
        "id": 0,
        "name": '',
        "tel": ''
      }
    }
  },
  methods: {
    allowDrop: function(ev) {
      ev.preventDefault();
    },
    drag: function(ev) {
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    drop: function(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    },
    checkParam: function(checkValue) { //检查Key和Value的合法性
      if (typeof(this.key) === "undefined" || this.key.trim() === "") {
        alert("Key不允许为空！");
        return false;
      }
      if (checkValue) {
        if (typeof(this.value) === "undefined" || this.value.trim() === "") {
          alert("Value不允许为空！");
          return false;
        }
      }
      return true;
    },
    _save: function(storageObj) {
      if (this.checkParam(true)) {
        if (typeof(Storage) !== "undefined") {
          var localKey = this.key.trim();
          var localValue = this.value.trim();
          storageObj.setItem(localKey, localValue);
          this.value = "";
          alert("保存成功！");
        } else {
          alert("抱歉！您的浏览器不支持 Web Storage ...");
        }
      }
    },
    _take: function(storageFlag, storageObj) {
      if (this.checkParam(false)) {
        if (typeof(Storage) !== "undefined") {
          var localKey = this.key.trim();
          var localValue = storageObj.getItem(localKey);
          if (localValue == undefined) {
            alert("对不起，没有保存该Key的值");
            return;
          }
          document.getElementById("result").innerHTML = "保存内容(" + storageFlag + ")为Key：" +
            localKey + ", Value : " + localValue;
          this.value = localValue;
        } else {
          alert("抱歉！您的浏览器不支持 Web Storage ...");
        }
      }
    },
    _delete: function(storageObj) {
      if (this.checkParam(false)) {
        if (typeof(Storage) !== "undefined") {
          var localKey = this.key.trim();
          storageObj.removeItem(localKey);
          alert("删除成功！");
          this.key = "";
          this.value = "";
        } else {
          alert("抱歉！您的浏览器不支持 Web Storage ...");
        }
      }
    },
    saveLocal() {
      this._save(localStorage);
    },
    deleteLocal() {
      this._delete(localStorage);
    },
    takeLocal() {
      this._take("Local", localStorage);
    },
    saveSession: function() {
      this._save(sessionStorage);
    },
    deleteSession: function() {
      this._delete(sessionStorage);
    },
    takeSession: function() {
      this._take('Session', sessionStorage);
    },
    _checkContactValid: function(option) {
      if (this.contact.id === '') {
        alert('请输入编号！');
        return false;
      }
      if (option && !this.contact.name) {
        alert('请输入名称！');
        return false;
      }
      if (option && !this.contact.tel) {
        alert('请输入电话！');
        return false;
      }
      if (!this.createDB(false)) {
        console.log("！！！自动调用获取数据库对象！！！");
      }
      return true;
    },
    _querySomeData: function(sql, arr_params) {
      if (!this.createDB(false)) {
        console.log("！！！自动调用获取数据库对象！！！");
      }
      var vue = this;
      this.dbHelper.transaction(function(tx) {
        tx.executeSql(sql, arr_params, function(tx, results) {
          vue.contact_size = results.rows.length;
          vue.contacts = results.rows;
        }, null);
      });
    },
    _clearInputText() {
      this.contact.id = 0;
      this.contact.name = '';
      this.contact.tel = '';
    },
    dropTable: function() {
      if (!this.createDB(false)) {
        return;
      }

      this.dbHelper.transaction(function(tx) {
        tx.executeSql('DROP TABLE CONTACTS');
      });
      //置空
      this.dbHelper = null;
      alert("数据表删除成功！");
    },
    createDB: function(showAlert) {
      if (!this.dbHelper) {
        this.dbHelper = openDatabase('myContacts', '1.0', 'Test Web SQl DB.', 2 * 1024 * 1024);
        if (this.dbHelper) {
          this.dbHelper.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS CONTACTS (id INT PRIMARY KEY, name VARCHAR(255) NOT NULL, tel VARCHAR(100) NOT NULL)');
          });
          return true;
        }
      }
      if (this.dbHelper && showAlert) {
        alert('数据库创建成功！');
      }
      return false;
    },
    insertData: function() {
      if (!this._checkContactValid(true)) {
        return;
      }
      var vue = this;
      this.dbHelper.transaction(function(tx) {
        tx.executeSql('INSERT INTO CONTACTS (id, name, tel) VALUES(?, ?, ?)', [vue.contact.id, vue.contact.name, vue.contact.tel]);
        vue._clearInputText();
      });
      this.queryAllData();
    },
    deleteData: function() {
      if (!this._checkContactValid(false)) {
        return;
      }

      var id = this.contact.id;
      this.dbHelper.transaction(function(tx) {
        tx.executeSql('DELETE FROM CONTACTS WHERE id=?', [id]);
      });
      this.queryAllData();
    },
    updateData: function() {
      if (!this._checkContactValid(true)) {
        return;
      }

      var contact = this.contact;
      this.dbHelper.transaction(function(tx) {
        tx.executeSql('UPDATE CONTACTS SET name=?, tel=? WHERE id=?', [contact.name, contact.tel, contact.id]);
      });
      this.queryAllData();
    },
    queryAllData: function() {
      this._querySomeData('SELECT * FROM CONTACTS', []);
    },
    queryDataByID: function() {
      if (!this._checkContactValid(false)) {
        return;
      }
      this._querySomeData('SELECT * FROM CONTACTS WHERE id=?', [this.contact.id]);
      this._clearInputText();
    },
    queryDataByName: function() {
      if (!this.contact.name) {
        alert("请输入名称！");
        return;
      }
      var likeName = "%" + this.contact.name + "%";
      this._querySomeData('SELECT * FROM CONTACTS WHERE name like ?', [likeName]);
      this._clearInputText();
    },
    queryDataByTel: function() {
      if (!this.contact.tel) {
        alert("请输入电话！");
        return;
      }
      this._querySomeData('SELECT * FROM CONTACTS WHERE tel = ?', [this.contact.tel]);
      this._clearInputText();
    }
  }
}

</script>
