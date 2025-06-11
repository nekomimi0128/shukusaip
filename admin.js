document.addEventListener('DOMContentLoaded', () => {
    const pushNotification = new PushNotification();

    // 管理者ログイン処理
    document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const adminID = document.getElementById('adminID').value;
        const adminPassword = document.getElementById('adminPassword').value;

        if (adminID === 'admin' && adminPassword === 'shukusai') {
            document.getElementById('adminLoginSection').style.display = 'none';
            document.getElementById('adminPanel').style.display = 'block';
            initializeAdminPanel();
        } else {
            alert('ログイン失敗');
        }
    });

    // 通知購読ボタン
    document.getElementById('subscribeButton').addEventListener('click', async () => {
        await pushNotification.subscribeUser();
    });

    // 緊急SOS発信ボタン
    document.getElementById('emergencySOSButton').addEventListener('click', async () => {
        try {
            const response = await fetch('/send-emergency-notification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    message: '緊急事態が発生しました！至急確認してください。' 
                })
            });
            const result = await response.json();
            
            // SOSログに記録
            const sosLog = document.getElementById('sosLog');
            sosLog.innerHTML += `
                <p>緊急SOS発信: ${new Date().toLocaleString()}</p>
            `;
            
            alert('緊急通知を送信しました');
        } catch (error) {
            console.error('通知送信エラー', error);
            alert('通知送信に失敗しました');
        }
    });

    // 既存の管理機能関数は以前のコードから変更なし
    function initializeAdminPanel() {
        // 児童情報生成、ファイルアップロードなどの処理
        // ...
    }
});
