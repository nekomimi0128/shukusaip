document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginID = document.getElementById('loginID').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // 認証処理（仮）
    if (validateCredentials(loginID, loginPassword)) {
        loadChildData(loginID);
    } else {
        alert('ログイン失敗：IDまたはパスワードが正しくありません');
    }
});

function validateCredentials(id, password) {
    // 実際は厳密な認証が必要
    return id.length === 7 && password.length === 7;
}

function loadChildData(childID) {
    // 児童データ読み込み
    document.getElementById('childInfo').style.display = 'block';
    document.getElementById('childNameDisplay').textContent = `児童ID: ${childID}`;
    
    // ビデオコンテナ
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <h3>最近のビデオ</h3>
        <p>読み込み中...</p>
    `;

    // テキストノート
    const textNotes = document.getElementById('textNotes');
    textNotes.innerHTML = `
        <h3>最近の記録</h3>
        <p>読み込み中...</p>
    `;
}
