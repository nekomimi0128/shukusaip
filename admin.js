// 管理者ログイン
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

function initializeAdminPanel() {
    // 児童選択リスト初期化
    const childSelect = document.getElementById('childSelect');
    // 実際は動的に児童リスト追加

    // 児童情報生成
    document.getElementById('childRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        generateChildCredentials();
    });

    // ファイルアップロード
    document.getElementById('fileUploadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        uploadFile();
    });

    // SOS発信
    document.getElementById('emergencySOSButton').addEventListener('click', sendEmergencySOS);
}

function generateChildCredentials() {
    const childName = document.getElementById('childName').value;
    const generatedID = Math.random().toString(36).substring(2, 9);
    const generatedPassword = Math.random().toString(36).substring(2, 9);

    const credentialsDisplay = document.getElementById('generatedCredentials');
    credentialsDisplay.innerHTML = `
        <p>児童名: ${childName}</p>
        <p>ID: ${generatedID}</p>
        <p>パスワード: ${generatedPassword}</p>
    `;
}

function uploadFile() {
    const file = document.getElementById('fileUpload').files[0];
    const description = document.getElementById('fileDescription').value;
    
    if (file) {
        console.log('アップロードファイル:', file.name);
        console.log('説明:', description);
        alert('ファイルアップロード成功');
    }
}

function sendEmergencySOS() {
    const confirmation = confirm('緊急SOSを発信しますか？');
    if (confirmation) {
        const sosLog = document.getElementById('sosLog');
        sosLog.innerHTML += `
            <p>緊急SOS発信: ${new Date().toLocaleString()}</p>
        `;
        alert('緊急SOS通知を送信しました');
    }
}
