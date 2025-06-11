// モック用の児童データベース（実際はサーバーから取得）
const mockChildDatabase = {
    'ABCD123': { 
        password: 'password123', 
        name: '山田太郎',
        videos: ['video1.mp4', 'video2.mp4'],
        notes: ['2023/07/01: 健康状態良好', '2023/07/02: 特記事項なし']
    },
    'EFGH456': { 
        password: 'password456', 
        name: '鈴木花子',
        videos: ['video3.mp4'],
        notes: ['2023/07/03: 通院']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const pushNotification = new PushNotification();

    // 通知購読ボタン
    document.getElementById('subscribeButton').addEventListener('click', async () => {
        await pushNotification.subscribeUser();
    });

    // ログイン処理
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const loginID = document.getElementById('loginID').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // 認証処理
        const childData = validateCredentials(loginID, loginPassword);
        if (childData) {
            document.getElementById('childInfo').style.display = 'block';
            loadChildData(childData);
        } else {
            alert('ログイン失敗：IDまたはパスワードが正しくありません');
        }
    });

    function validateCredentials(id, password) {
        // モックデータベースで認証
        const child = mockChildDatabase[id];
        return child && child.password === password ? child : null;
    }

    function loadChildData(childData) {
        document.getElementById('childNameDisplay').textContent = `児童名: ${childData.name}`;
        
        // ビデオコンテナ
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = `
            <h3>最近のビデオ</h3>
            ${childData.videos.map(video => `<p>${video}</p>`).join('')}
        `;

        // テキストノート
        const textNotes = document.getElementById('textNotes');
        textNotes.innerHTML = `
            <h3>最近の記録</h3>
            ${childData.notes.map(note => `<p>${note}</p>`).join('')}
        `;
    }
});
