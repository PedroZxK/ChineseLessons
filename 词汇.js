const categorias_meta = {
    transportes: {
        caractere: "交通工具",
        pinyin: "jiāo tōng gōng jù",
        significado: "Meios de Transporte",
        audio: "声音/jiaotonggongju.mp3"
    },
    antonimos: {
        caractere: "反义词",
        pinyin: "fǎn yì cí",
        significado: "Antônimos",
        audio: "声音/fanyici.mp3"
    },
    tempo: {
        caractere: "时间",
        pinyin: "shí jiān",
        significado: "Tempo",
        audio: "声音/shijian.mp3"
    },
    frutas: {
        caractere: "水果",
        pinyin: "shuǐ guǒ",
        significado: "Frutas",
        audio: "声音/shuiguo.mp3"
    },
    verduras: {
        caractere: "蔬菜",
        pinyin: "shū cài",
        significado: "Vegetais",
        audio: "声音/shucai.mp3"
    }
};
const vocabulario = {
    transportes: [
        { caractere: "汽车", pinyin: "qì chē", significado: "carro", imagem: "carro.png", audio: "声音/qiche.mp3" },
        { caractere: "飞机", pinyin: "fēi jī", significado: "avião", imagem: "aviao.png", audio: "声音/feiji.mp3" },
        { caractere: "公交车", pinyin: "gōng jiāo chē", significado: "ônibus", imagem: "onibus.png", audio: "声音/gongjiaoche.mp3" },
        { caractere: "电瓶车", pinyin: "diàn píng chē", significado: "bicicleta elétrica", imagem: "bicicleta-eletrica.png", audio: "声音/dianpingche.mp3" },
        { caractere: "自行车", pinyin: "zì xíng chē", significado: "bicicleta", imagem: "bicicleta.png", audio: "声音/zixingche.mp3" },
        { caractere: "地铁", pinyin: "dì tiě", significado: "metrô", imagem: "metro.png", audio: "声音/ditie.mp3" },
        { caractere: "摩托车", pinyin: "mó tuō chē", significado: "moto", imagem: "moto.png", audio: "声音/motuoche.mp3" },
        { caractere: "出租车", pinyin: "chū zū chē", significado: "táxi", imagem: "taxi.png", audio: "声音/chuzuche.mp3" },
        { caractere: "火车", pinyin: "huǒ chē", significado: "trem", imagem: "trem.png", audio: "声音/huoche.mp3" },
        { caractere: "警车", pinyin: "jǐng chē", significado: "carro de polícia", imagem: "carro-de-policia.png", audio: "声音/jingche.mp3" },
        { caractere: "消防车", pinyin: "xiāo fáng chē", significado: "caminhão de bombeiro", imagem: "caminhao-de-bombeiro.png", audio: "声音/xiaofangche.mp3" },
        { caractere: "救护车", pinyin: "jiù hù chē", significado: "ambulância", imagem: "ambulancia.png", audio: "声音/jiuhuche.mp3" }
    ],

    antonimos: [
        { caractere: "上 — 下", pinyin: "shàng — xià", significado: "cima — baixo", imagem: "cima-baixo.png", audio: "声音/shang_xia.mp3" },
        { caractere: "左 — 右", pinyin: "zuǒ — yòu", significado: "esquerda — direita", imagem: "esquerda-direita.png", audio: "声音/zuo_you.mp3" },
        { caractere: "远 — 近", pinyin: "yuǎn — jìn", significado: "longe — perto", imagem: "longe-perto.png", audio: "声音/yuan_jin.mp3" },
        { caractere: "大 — 小", pinyin: "dà — xiǎo", significado: "grande — pequeno", imagem: "grande-pequeno.png", audio: "声音/da_xiao.mp3" },
        { caractere: "前 — 后", pinyin: "qián — hòu", significado: "frente — atrás", imagem: "frente-atras.png", audio: "声音/qian_hou.mp3" },
        { caractere: "里 — 外", pinyin: "lǐ — wài", significado: "dentro — fora", imagem: "dentro-fora.png", audio: "声音/li_wai.mp3" },
        { caractere: "高 — 矮", pinyin: "gāo — ǎi", significado: "alto — baixo (altura)", imagem: "alto-baixo.png", audio: "声音/gao_ai.mp3" },
        { caractere: "长 — 短", pinyin: "cháng — duǎn", significado: "longo — curto", imagem: "longo-curto.png", audio: "声音/chang_duan.mp3" }
    ],

    tempo: [
        { caractere: "年", pinyin: "nián", significado: "ano", imagem: "ano.png", audio: "声音/nian.mp3" },
        { caractere: "月", pinyin: "yuè", significado: "mês", imagem: "mes.png", audio: "声音/yue.mp3" },
        { caractere: "日", pinyin: "rì", significado: "dia", imagem: "dia.png", audio: "声音/ri.mp3" },
        { caractere: "星期", pinyin: "xīng qī", significado: "semana / dia da semana", imagem: "semana.png", audio: "声音/xingqi.mp3" },
        { caractere: "早上", pinyin: "zǎo shang", significado: "manhã cedo", imagem: "manha.png", audio: "声音/zaoshang.mp3" },
        { caractere: "上午", pinyin: "shàng wǔ", significado: "manhã", imagem: "manha_tarde.png", audio: "声音/shangwu.mp3" },
        { caractere: "中午", pinyin: "zhōng wǔ", significado: "meio-dia", imagem: "meiodia.png", audio: "声音/zhongwu.mp3" },
        { caractere: "下午", pinyin: "xià wǔ", significado: "tarde", imagem: "tarde.png", audio: "声音/xiawu.mp3" },
        { caractere: "晚上", pinyin: "wǎn shang", significado: "noite", imagem: "noite.png", audio: "声音/wanshang.mp3" },
        { caractere: "点", pinyin: "diǎn", significado: "hora", imagem: "hora.png", audio: "声音/dian.mp3" },
        { caractere: "分", pinyin: "fēn", significado: "minuto", imagem: "minuto.png", audio: "声音/fen.mp3" },
        { caractere: "分钟", pinyin: "fēn zhōng", significado: "minuto (unidade de tempo)", imagem: "minuto2.png", audio: "声音/fenzhong.mp3" },
        { caractere: "小时", pinyin: "xiǎo shí", significado: "hora (duração)", imagem: "hora2.png", audio: "声音/xiaoshi.mp3" },
        { caractere: "现在", pinyin: "xiàn zài", significado: "agora", imagem: "agora.png", audio: "声音/xianzai.mp3" },
        { caractere: "时候", pinyin: "shí hou", significado: "momento / quando", imagem: "momento.png", audio: "声音/shihou.mp3" },
        { caractere: "前天", pinyin: "qián tiān", significado: "anteontem", imagem: "anteontem.png", audio: "声音/qiantian.mp3" },
        { caractere: "昨天", pinyin: "zuó tiān", significado: "ontem", imagem: "ontem.png", audio: "声音/zuotian.mp3" },
        { caractere: "今天", pinyin: "jīn tiān", significado: "hoje", imagem: "hoje.png", audio: "声音/jintian.mp3" },
        { caractere: "明天", pinyin: "míng tiān", significado: "amanhã", imagem: "amanha.png", audio: "声音/mingtian.mp3" },
        { caractere: "后天", pinyin: "hòu tiān", significado: "depois de amanhã", imagem: "depois_amanha.png", audio: "声音/houtian.mp3" },
        { caractere: "前年", pinyin: "qián nián", significado: "ano retrasado", imagem: "ano_retrasado.png", audio: "声音/qiannian.mp3" },
        { caractere: "去年", pinyin: "qù nián", significado: "ano passado", imagem: "ano_passado.png", audio: "声音/qunian.mp3" },
        { caractere: "今年", pinyin: "jīn nián", significado: "este ano", imagem: "este_ano.png", audio: "声音/jinnian.mp3" },
        { caractere: "明年", pinyin: "míng nián", significado: "próximo ano", imagem: "proximo_ano.png", audio: "声音/mingnian.mp3" },
        { caractere: "后年", pinyin: "hòu nián", significado: "daqui a dois anos", imagem: "dois_anos.png", audio: "声音/hounian.mp3" },
        { caractere: "上个月", pinyin: "shàng ge yuè", significado: "mês passado", imagem: "mes_passado.png", audio: "声音/shanggeyue.mp3" },
        { caractere: "这个月", pinyin: "zhè ge yuè", significado: "este mês", imagem: "este_mes.png", audio: "声音/zhegeyue.mp3" },
        { caractere: "下个月", pinyin: "xià ge yuè", significado: "próximo mês", imagem: "proximo_mes.png", audio: "声音/xiageyue.mp3" }
    ],

    frutas: [
        { caractere: "苹果", pinyin: "píng guǒ", significado: "maçã", imagem: "maca.png", audio: "声音/pingguo.mp3" },
        { caractere: "香蕉", pinyin: "xiāng jiāo", significado: "banana", imagem: "banana.png", audio: "声音/xiangjiao.mp3" },
        { caractere: "葡萄", pinyin: "pú tao", significado: "uva", imagem: "uva.png", audio: "声音/putao.mp3" },
        { caractere: "西瓜", pinyin: "xī guā", significado: "melancia", imagem: "melancia.png", audio: "声音/xigua.mp3" },
        { caractere: "梨", pinyin: "lí", significado: "pera", imagem: "pera.png", audio: "声音/li.mp3" },
        { caractere: "草莓", pinyin: "cǎo méi", significado: "morango", imagem: "morango.png", audio: "声音/caomei.mp3" },
        { caractere: "桃子", pinyin: "táo zi", significado: "pêssego", imagem: "pessego.png", audio: "声音/taozi.mp3" },
        { caractere: "菠萝", pinyin: "bō luó", significado: "abacaxi", imagem: "abacaxi.png", audio: "声音/boluo.mp3" },
        { caractere: "橙子", pinyin: "chéng zi", significado: "laranja", imagem: "laranja.png", audio: "声音/chengzi.mp3" },
        { caractere: "蓝莓", pinyin: "lán méi", significado: "mirtilo", imagem: "mirtilo.png", audio: "声音/lanmei.mp3" }
    ],

    verduras: [
        { caractere: "西红柿", pinyin: "xī hóng shì", significado: "tomate", imagem: "tomate.png", audio: "声音/xihongshi.mp3" },
        { caractere: "黄瓜", pinyin: "huáng guā", significado: "pepino", imagem: "pepino.png", audio: "声音/huanggua.mp3" },
        { caractere: "土豆", pinyin: "tǔ dòu", significado: "batata", imagem: "batata.png", audio: "声音/tudou.mp3" },
        { caractere: "生菜", pinyin: "shēng cài", significado: "alface", imagem: "alface.png", audio: "声音/shengcai.mp3" },
        { caractere: "西兰花", pinyin: "xī lán huā", significado: "brócolis", imagem: "brocolis.png", audio: "声音/xilanhua.mp3" },
        { caractere: "洋葱", pinyin: "yáng cōng", significado: "cebola", imagem: "cebola.png", audio: "声音/yangcong.mp3" },
        { caractere: "辣椒", pinyin: "là jiāo", significado: "pimenta", imagem: "pimenta.png", audio: "声音/lajiao.mp3" },
        { caractere: "茄子", pinyin: "qié zi", significado: "berinjela", imagem: "berinjela.png", audio: "声音/qiezi.mp3" },
        { caractere: "胡萝卜", pinyin: "hú luó bo", significado: "cenoura", imagem: "cenoura.png", audio: "声音/huluobo.mp3" },
        { caractere: "白菜", pinyin: "bái cài", significado: "acelga / repolho chinês", imagem: "acelga-repolho.png", audio: "声音/baicai.mp3" }
    ]
};