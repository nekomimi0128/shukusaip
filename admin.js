document.addEventListener('DOMContentLoaded', () => {
    // モック児童データベース
    const mockChildDatabase = {};

    // 児童情報生成
    document.getElementById('childRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const childName = document.getElementById('childName').value;
        
        // ランダムなID/PW生成
        const generateRandomString = (length) => 
            Math.random().toString(36).substring(2, length + 2).toUpperCase();
        
        const generatedID = generateRandomString(7);
        const generatedPassword = generateRandomString(7);

        // モックデータベースに保存
        mockChildDatabase[generatedID] = {
            name: childName,
            password: generatedPassword,
            videos: [],
            notes: []
        };

        // 生成した認証情報を表示
        const credentialsDisplay = document.getElementById('generatedCredentials');
        credentialsDisplay.innerHTML = `
            <p>児童名: ${childName}</p>
            <p>ID: ${generatedID}</p>
            <p>パスワード: ${generatedPassword}</p>
            <p style="color:red;">※ この情報を保護者に必ず伝えてください</p>
        `;
    });

    // 他の既存のイベントリスナーは省略
});
