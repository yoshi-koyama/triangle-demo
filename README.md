# このプロジェクトについて

# 前提
- Dockerおよびdocker-composeを利用できること

# ローカル環境構築

1. git clone このプロジェクトのクローンURL
2. cd triangle-demo
3. docker-compose up
4. ブラウザから`http://localhost:3000/`にアクセスする  
※docker-compose upから立ち上がるまでに1分程度待たないといけないです

# Webからアクセス
このアプリケーションはFirebase Hostingを利用してWeb上に公開しています。

https://triangle-demo-c574e.web.app/

からアクセスできます。

# 課題

以下コマンドのとおりにブランチを作成し、テストケースを作成してください。

`$ git branch feature/<your-name>`  
<your-name>は自身の名前のアルファベットに置き換えてください。  

`$ git checkout feature/<your-name>`  

`test`ディレクトリ配下に`<your-name>-testcase.md`ファイルを作成する。
  
`test`ディレクトリの`koyama-testcase.md`を参考にテストケースを作成してください。
  
テストケース作成後、以下コマンドでファイルをpushしてPRを作成してください。
  
$ git add .  
$ git commit -m "自分で考えたコミットメッセージ"
$ git push -u

