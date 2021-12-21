// 傳送訊息
// type 的可用值說明：https://developers.line.biz/en/reference/liff/#send-messages
liff.sendMessages([
    {
      type: 'text',
      text: 'Hello, World!'
    }
  ]).then(function(res) {
      console.log(res)
    })
    .catch(function(error) {
      console.log(error);
    });
  
  // 傳送訊息給朋友
  // 發訊息的可用參數：https://developers.line.biz/en/reference/liff/#share-target-picker
  liff.shareTargetPicker(message)
    .then(function(res) {
      console.log(res)
    }).catch(function(error) {
      console.log(error);
    })