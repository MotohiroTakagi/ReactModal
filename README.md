##　実装手順

1. Appコンポーネントを作成

2. Appコンポーネント内にModalを開くボタンを用意

3. ボタンクリックで開くモーダルのModalコンポーネントを作成

4. Appコンポーネントのボタンクリックイベントを定義
　　useStateを使用し、初期値と更新関数を設定

5. 親のAppから、子のModalにpropsを渡す。

6. propsのshowModalがtrueなら表示、Falseなら非表示の条件式を追加

7. Appコンポーネントのボタンにクリックイベントを追加し、クリック時にShowModal関数を発火

8. 更新関数のsetShowModalも、AppからModalにpropsを渡す。

9. モーダルのcloseボタンにクリックイベントを付与し、更新関数setShowModalでtrue/falseを切り替える

10. contentをAppからModalにpropsで渡す

11. 最後にcssでstyleを適用する


