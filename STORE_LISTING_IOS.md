# App Store Connect 掲載情報

App Store Connect 登録時のコピペ用。Google Play 用の `STORE_LISTING.md` と仕様が違うので別管理。

## 基本情報

| 項目 | 値 |
|---|---|
| アプリ名 (Name) | にゃんおみくじ |
| サブタイトル (Subtitle, 30字以内) | タップで占う、今日の運勢 |
| Bundle ID | com.halmaker025.omikuji |
| SKU | omikuji-app-001 |
| プライマリ言語 | 日本語 |
| カテゴリ (Primary) | エンターテインメント (Entertainment) |
| カテゴリ (Secondary) | ライフスタイル (Lifestyle) |
| 価格 | 無料 (Free) |
| アプリ内課金 | なし |
| 年齢レーティング | 4+ |
| 著作権表示 (Copyright) | © 2026 nekobiyori |
| サポート URL | https://hal-maker025.github.io/omikuji-app/ |
| マーケティング URL (任意) | https://github.com/hal-maker025/omikuji-app |
| プライバシーポリシー URL | https://hal-maker025.github.io/omikuji-app/ |

## プロモーションテキスト (170字以内、審査なしで更新可)

```
ボタンひとつで今日の運勢を占う、シンプルなおみくじアプリ。広告も課金も通信もなし。レアな「にゃん吉」が出たら今日はちょっと特別な一日。
```

## 説明 (Description, 4000字以内)

```
🎴 にゃんおみくじ

ボタンひとつで、今日の運勢を占う。
シンプルで素早い、日本のおみくじアプリです。

━━━━━━━━━━━━━━━━━━

▼ こんな時に
・朝起きて、今日の気分を上げたい
・商談やプレゼン前のおまじないに
・なにか決めたい時の背中押しに
・友達や家族と一緒に楽しむ占いとして

▼ 6種類の運勢
🌅 大吉 — 最高の運気。動くなら今日。
🌸 吉 — 良いことがありそう。
🍀 中吉 — おだやかに良し。
☘️ 小吉 — 小さな良いこと、ひとつ。
🌧️ 凶 — 無理せずやり過ごそう。
😺 にゃん吉 — 今日は猫に会えるかも。

「にゃん吉」が出たら、その日はちょっと特別。

━━━━━━━━━━━━━━━━━━

▼ 特徴

✨ 軽量・高速
無駄な機能を削ぎ落とした、ボタンひとつのシンプル設計。

🔒 完全プライバシー保護
ユーザー情報を一切収集しません。広告も解析ツールも入っていません。

📡 オフラインで動作
通信なし。電波の入らない場所でも引けます。

🆓 完全無料
課金・サブスクなし。

━━━━━━━━━━━━━━━━━━

▼ 開発者から

朝の習慣に、ちょっとした遊びに、
日本のお正月文化「おみくじ」を、
スマホでサッと楽しめるようにしました。

「にゃん吉」が出た日は、
猫を見かけたらぜひ撮影してSNSで #にゃんおみくじ と投稿してみてください。

━━━━━━━━━━━━━━━━━━

▼ プライバシーについて

このアプリは利用者のいかなる情報も収集しません。
詳細: https://hal-maker025.github.io/omikuji-app/

開発: nekobiyori
```

## キーワード (Keywords, 100字以内・カンマ区切り)

App Store の検索インデックス対象。アプリ名に含まれる語は除く（重複は無駄）。

```
おみくじ,占い,運勢,大吉,御神籤,猫,ねこ,ラッキー,初詣,正月,fortune,omikuji
```

## What's New (リリースノート, 4000字以内)

初回リリース時:

```
初回リリース。
6種類の運勢（大吉・吉・中吉・小吉・凶・にゃん吉）を引けます。
```

## App Privacy (App Store Connect の質問票)

Apple は Google Play よりも質問が細かい。すべて「収集しない」で回答する。

| 質問 | 回答 |
|---|---|
| Data Used to Track You | None |
| Data Linked to You | None |
| Data Not Linked to You | None |
| 連絡先情報 (Contact Info) | 収集しない |
| 健康・フィットネス | 収集しない |
| 金融情報 | 収集しない |
| 位置情報 | 収集しない |
| 機密情報 | 収集しない |
| 連絡先 (Contacts) | 収集しない |
| ユーザーコンテンツ | 収集しない |
| 検索履歴 | 収集しない |
| 識別子 (Identifiers) | 収集しない |
| 購入情報 | 収集しない |
| 使用状況データ | 収集しない |
| 診断 (Diagnostics) | 収集しない |
| その他データ | 収集しない |

## 輸出コンプライアンス (Encryption)

| 項目 | 回答 |
|---|---|
| 暗号化を使用しているか | いいえ |
| ITSAppUsesNonExemptEncryption | false (`app.json` の `infoPlist` に設定済) |

→ ビルドごとの質問はスキップされる。

## Age Rating (年齢制限・コンテンツ記述)

| 項目 | 回答 |
|---|---|
| 暴力 (漫画/ファンタジー) | なし |
| 暴力 (リアル) | なし |
| 性的表現・ヌード | なし |
| 不適切な言葉 | なし |
| アルコール・タバコ・薬物 | なし |
| 成人向けテーマ | なし |
| ホラー/恐怖 | なし |
| 模擬ギャンブル | **頻度なし** ※おみくじは占いだが、賭け事ではないため該当しない |
| ギャンブル (リアル) | なし |
| 医療情報 | なし |

判定: **4+**（全年齢）

## App Review Information（審査担当者向け、外部非公開）

| 項目 | 値 |
|---|---|
| First Name | (あなたの名) |
| Last Name | (あなたの姓) |
| Phone | (連絡先電話番号) |
| Email | nekobiyori.app@gmail.com |
| デモアカウント | 不要（ログイン機能なし） |
| 審査メモ (Notes) | 下記参照 |

### 審査メモ（推奨記入文）

```
This is a simple Japanese omikuji (fortune slip) app.
Tap the button to randomly display one of six fortune types.
- No login required
- No ads
- No analytics or tracking
- No network communication (fully offline)
- No in-app purchases
- All data is generated locally on device

The "にゃん吉 (Nyankichi)" cat emoji result is a unique feature for entertainment purposes only.
This is not a gambling app — omikuji is a traditional Japanese New Year cultural activity for entertainment.
```

→ Guideline 4.2 (Minimum Functionality) でリジェクトされやすいジャンルなので、文化的背景を伝えることでリスクを下げる。

## グラフィックアセット要件

| 種類 | サイズ | ステータス | 備考 |
|---|---|---|---|
| App Icon (Marketing) | 1024×1024 PNG (アルファなし、角丸なし) | 既存 `assets/icon.png` 流用可（アルファ要削除） | App Store Connect でアップロード |
| App Icon (アプリ内) | Expo が自動生成 | OK | `assets/icon.png` から |
| iPhone 6.9" スクリーンショット | 1290×2796 (Portrait) | **未撮影 必須** | iPhone 16 Pro Max など |
| iPhone 6.5" スクリーンショット | 1284×2778 or 1242×2688 | 6.9" を提出すれば省略可 | |
| iPhone 5.5" スクリーンショット | 1242×2208 | **不要** (2024年以降) | |
| iPad 13" スクリーンショット | 2064×2752 | 任意 (`supportsTablet: true` なので推奨) | iPad Pro M4 |
| iPad 12.9" スクリーンショット | 2048×2732 | 13" を提出すれば省略可 | |

→ Expo のシミュレータビルドで iPhone 16 Pro Max + iPad Pro 13" のスクショを撮るのがおすすめ。

---

最終更新: 2026-05-03
