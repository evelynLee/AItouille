// 取得使用者類型資料
var context = liff.getContext();
console.log(context);

// 取得使用者公開資料
// 後台的「Scopes」要設定開啟 profile, openid
liff.getProfile()
    .then(function(profile) {
      console.log(profile);
    });

// 取得使用者 email
// 後台的 Email address permission 要是「Applied」
// LIFF 的設定，Scopes 的「email*」要打勾
// 使用者在登入時，「電子郵件帳號」也要是「許可」的
var user = liff.getDecodedIDToken();
var email = user.email;
console.log(email);