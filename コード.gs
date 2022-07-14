// LINE developers記載のアクセストークン
//var ACCESS_TOKEN = 'SqCsEw6J94z2YehmYroZK5zWaRuCZXzujP50864gSNjUe0mLh01YmFtbbj/7ZEz9RwYHEXYJTDc/MlvA3o2+aHl3CDS/SHxQQ5WQVwE4BAOxUci9rmMx3Gu/cKp036m/CckkQVy1wloqsrzHTsDv/AdB04t89/1O/w1cDnyilFU=';
var prop = PropertiesService.getScriptProperties();
var ACCESS_TOKEN = prop.getProperty("LINE_TOKEN");

function doPost(e) {
  // ----- 送られてきた値をパース -----
  var event = JSON.parse(e.postData.contents).events[0];

  // 応答用Token
  var replyToken = event.replyToken;

  // typeを取得 
  var type = event.source.type;

  // typeを判定して、idを取得
  if (type == 'user') {
    var id = event.source.userId;
  } else if (type == 'group') {
    var id = event.source.groupId;
  } else if (type == 'room') {
    var id = event.source.roomId;
  }

  // ----- メッセージ送信用パラメータ設定 -----
  var url = 'https://api.line.me/v2/bot/message/reply';

  var payload = {
    'replyToken': replyToken,
    'messages': [
      {
        'type': 'text',
        'text': type + '_id = '+ id
      }
    ]
  };

  var options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'payload' : JSON.stringify(payload)
  };

  // ----- lineメッセージ送信 -----
  UrlFetchApp.fetch(url, options)
}
