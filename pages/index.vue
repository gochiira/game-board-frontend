<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-9">
          <div class="tile is-ancestor">
            <div class="tile is-6 is-parent">
              <div class="tile is-child box">
                <p class="title">
                  ゲームルール
                </p>
                <b-collapse
                  v-for="(collapse, index) of collapses"
                  :key="index"
                  class="card"
                  animation="slide"
                  :open="isOpen == index"
                  @open="isOpen = index"
                >
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                  >
                    <p class="card-header-title">
                      {{ collapse.title }}
                    </p>
                    <a class="card-header-icon">
                      <b-icon
                        :icon="props.open ? 'menu-down' : 'menu-up'"
                      />
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      {{ collapse.text }}
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
            <div class="tile is-6 is-parent">
              <div v-if="startMethod == -1" class="tile is-child box">
                <p class="title">
                  ルーム選択
                </p>
                <b-field class="has-text-centered" label="ルームを作成して参加する" label-positional="on-border">
                  <b-input
                    v-model="roomID"
                    expanded
                    placeholder="ルームID (4桁)"
                    type="number"
                    min="0000"
                    max="9999"
                  />
                  <p class="control">
                    <b-button
                      class="button is-primary"
                      @click="startMethod=1"
                    >
                      作成
                    </b-button>
                  </p>
                </b-field>
                <b-field class="has-text-centered" label="ルーム一覧から選んで参加する" label-positional="on-border">
                  <b-select expanded placeholder="ルームIDを選択">
                    <option>ルーム1204(1/5)</option>
                  </b-select>
                  <p class="control">
                    <b-button
                      class="button is-primary"
                      @click="startMethod=2"
                    >
                      参加
                    </b-button>
                  </p>
                </b-field>
                <b-field class="has-text-centered" label="ルームIDを入力して参加する" label-positional="on-border">
                  <b-input
                    v-model="roomID"
                    expanded
                    placeholder="ルームID (4桁)"
                    type="number"
                    min="0000"
                    max="9999"
                  />
                  <p class="control">
                    <b-button
                      class="button is-primary"
                      @click="startMethod=3"
                    >
                      参加
                    </b-button>
                  </p>
                </b-field>
              </div>
              <div v-if="startMethod != -1 && !isLogined" class="tile is-child box">
                <p class="title">
                  ログインして開始
                </p>
                <p class="has-text-centered">
                  <b-button @click="isLogined = true" primary size="is-large" class="mt-4">
                    Googleでログイン
                  </b-button>
                  <b-button @click="isLogined = true" primary size="is-large" class="mt-4">
                    Twitterでログイン
                  </b-button>
                  <b-button @click="isLogined = true" primary size="is-large" class="mt-4">
                    Githubでログイン
                  </b-button>
                </p>
              </div>
              <div v-if="isLogined" class="tile is-child box">
                <p class="subtitle has-text-centered">
                  ルームID: {{ roomID }}
                </p>
                <p class="subtitle has-text-centered">
                  プレイヤー人数: 1/5
                </p>
                <p class="has-text-centered">
                  <b-button disabled primary size="is-large" class="mt-4">
                    開始する
                  </b-button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      isOpen: -1,
      roomID: -1,
      startMethod: -1,
      isLogined: false,
      collapses: [
        {
          title: 'どんなゲーム？',
          text: '「ご注文はうさぎですか？？」のキャラクターとなり、ラテアートを描き合うゲームです。手札5枚で行うバッティングゲームです。'
        },
        {
          title: '終了条件と勝利条件',
          text: 'プレイヤーの誰かが4杯目のラテアートを描くか、山札がなくなったらゲーム終了です。カップカードに書かれた点数の合計が最も高いプレイヤーが勝利です。（一位が同点で複数いるときはより描いたラテアートが少ないプレイヤーが勝利）'
        },
        {
          title: '準備',
          text: 'プレイヤーはそれぞれ、同じ色のラテアートカード５枚ずつを持ちます。カップカードをよく混ぜ、裏向きに山札にして中央に置きます。（4人以下の場合、使わないキャラの色の「カラフルなカップ」は事前に抜いておきます）'
        },
        {
          title: '基本ルール',
          text: 'カップカードの山の1番上を表にします。プレイヤーは手札の中から、表になったカップカードに描きたいラテアートカードを選んで、裏向きに出します。全員が出したら、一斉に表にします。ラテアートカードの数字を比べてラテアートを描く人を決めます。（比べ方は後述）ラテアートを描く人はカップカードにラテアートカードを重ねて自分の前におきます。ラテアートを描けなかった人はラテアートカードを手札に戻します。以上を繰り返します。'
        },
        {
          title: 'ラウンド勝利条件(ラテアートを描く人の決め方)',
          text: 'まず、同じ数字のラテアートを除きます。残った中で最も大きな数を出した人がラテアートを描きます。ただし、5が最も大きいときに1が残っていたなら、1を出した人がラテアートを描きます。'
        },
        {
          title: 'ラウンド勝利条件の例',
          text: '①2.3.4.4.4の時 4を出した人は手札に戻します。2.3で比べるので3を出した人がラテアートを描きます。②   1.2.3.4.5の時 5が最も大きいですが、1があるので1を出した人がラテアートを描きます。③ 3.3.5.5.5の時全員のラテアートカードが手札に戻ります。この時のカップカードはゲームから取り除かれます。'
        },
        {
          title: '特殊なカップカード',
          text: 'うさぎなカップ（点数欄が3/1、うさぎマーク):4のラテアートをこのカップに描くと3点、それ以外のラテアートだと1点。　カラフルなカップ（点数欄が3/1、色付き): その色のプレイヤーがラテアートを描くと3点、それ以外のプレイヤーだと1点。　アンティークなカップ（点数欄が？）:描いたラテアートの数字がそのまま点数。　スプーン付きカップ: このカップにラテアートを描いたプレイヤーは、すぐにその場にある全てのラテアートの中から一つ選んでスプーントークンを置きます。スプーントークンを置かれたラテアートは0点扱いになります。（点数は0点になってもゲーム終了条件の4杯のうちの１杯には数えます。）'
        }
      ]
    }
  }
}
</script>
