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
    },
    cores: {
        caractere: "颜色",
        pinyin: "yán sè",
        significado: "Cores",
        audio: "声音/yanse.mp3"
    },
    corpo: {
        caractere: "身体",
        pinyin: "shēn tǐ",
        significado: "Corpo",
        audio: "声音/shenti.mp3"
    },
    comidas: {
        caractere: "食物",
        pinyin: "shí wù",
        significado: "Comidas",
        audio: "声音/shiwu.mp3"
    },
    itens: {
        caractere: "生活用品",
        pinyin: "shēng huó yòng pǐn",
        significado: "Itens do Dia a Dia",
        audio: "声音/shenghuoyongpin.mp3"
    },
    profissoes: {
        caractere: "职业",
        pinyin: "zhí yè",
        significado: "Profissões",
        audio: "声音/zhiye.mp3"
    },
    lugares: {
        caractere: "地点",
        pinyin: "dì diǎn",
        significado: "Lugares",
        audio: "声音/didian.mp3"
    },
    classificadores: {
        caractere: "量词",
        pinyin: "liàng cí",
        significado: "Classificadores",
        audio: "声音/liangci.mp3"
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
    ],
    
    cores: [
        { caractere: "红色", pinyin: "hóngsè", significado: "vermelho", imagem: "vermelho.png", audio: "声音/hongse.mp3" },
        { caractere: "黄色", pinyin: "huángsè", significado: "amarelo", imagem: "amarelo.png", audio: "声音/huangse.mp3" },
        { caractere: "蓝色", pinyin: "lánsè", significado: "azul", imagem: "azul.png", audio: "声音/lanse.mp3" },
        { caractere: "绿色", pinyin: "lǜsè", significado: "verde", imagem: "verde.png", audio: "声音/lvse.mp3" },
        { caractere: "紫色", pinyin: "zǐsè", significado: "roxo", imagem: "roxo.png", audio: "声音/zise.mp3" },
        { caractere: "黑色", pinyin: "hēisè", significado: "preto", imagem: "preto.png", audio: "声音/heise.mp3" },
        { caractere: "白色", pinyin: "báisè", significado: "branco", imagem: "branco.png", audio: "声音/baise.mp3" },
        { caractere: "咖啡色", pinyin: "kāfēisè", significado: "marrom", imagem: "marrom.png", audio: "声音/kafeise.mp3" },
        { caractere: "灰色", pinyin: "huīsè", significado: "cinza", imagem: "cinza.png", audio: "声音/huise.mp3" }
    ],

    corpo: [
        { caractere: "眼睛", pinyin: "yǎn jing", significado: "olhos", imagem: "olhos.png", audio: "声音/yanjing.mp3" },
        { caractere: "耳朵", pinyin: "ěr duo", significado: "orelhas", imagem: "orelhas.png", audio: "声音/erduo.mp3" },
        { caractere: "鼻子", pinyin: "bí zi", significado: "nariz", imagem: "nariz.png", audio: "声音/bizi.mp3" },
        { caractere: "嘴", pinyin: "zuǐ", significado: "boca", imagem: "boca.png", audio: "声音/zui.mp3" },
        { caractere: "头", pinyin: "tóu", significado: "cabeça", imagem: "cabeca.png", audio: "声音/tou.mp3" },
        { caractere: "肩膀", pinyin: "jiān bǎng", significado: "ombro", imagem: "ombro.png", audio: "声音/jianbang.mp3" },
        { caractere: "手", pinyin: "shǒu", significado: "mão", imagem: "mao.png", audio: "声音/shou.mp3" },
        { caractere: "胳膊", pinyin: "gē bo", significado: "braço", imagem: "braco.png", audio: "声音/gebo.mp3" },
        { caractere: "肚子", pinyin: "dù zi", significado: "barriga", imagem: "barriga.png", audio: "声音/duzi.mp3" },
        { caractere: "腿", pinyin: "tuǐ", significado: "perna", imagem: "perna.png", audio: "声音/tui.mp3" },
        { caractere: "脚", pinyin: "jiǎo", significado: "pé", imagem: "pe.png", audio: "声音/jiao.mp3" }
    ],

    comidas: [
        { caractere: "面包", pinyin: "miàn bāo", significado: "pão", imagem: "pao.png", audio: "声音/mianbao.mp3" },
        { caractere: "面条", pinyin: "miàn tiáo", significado: "macarrão", imagem: "macarrao.png", audio: "声音/miantiao.mp3" },
        { caractere: "饺子", pinyin: "jiǎo zi", significado: "bolinho chinês", imagem: "jiaozi.png", audio: "声音/jiaozi.mp3" },
        { caractere: "三明治", pinyin: "sān míng zhì", significado: "sanduíche", imagem: "sanduiche.png", audio: "声音/sanmingzhi.mp3" },
        { caractere: "酸奶", pinyin: "suān nǎi", significado: "iogurte", imagem: "iogurte.png", audio: "声音/suannai.mp3" },
        { caractere: "牛奶", pinyin: "niú nǎi", significado: "leite", imagem: "leite.png", audio: "声音/niunai.mp3" },
        { caractere: "茶", pinyin: "chá", significado: "chá", imagem: "cha.png", audio: "声音/cha.mp3" },
        { caractere: "咖啡", pinyin: "kā fēi", significado: "café", imagem: "cafe.png", audio: "声音/kafei.mp3" },
        { caractere: "果汁", pinyin: "guǒ zhī", significado: "suco de frutas", imagem: "suco.png", audio: "声音/guozhi.mp3" },
        { caractere: "奶茶", pinyin: "nǎi chá", significado: "chá com leite", imagem: "cha-com-leite.png", audio: "声音/naicha.mp3" }
    ],

    itens: [
        { caractere: "杯子", pinyin: "bēi zi", significado: "copo", imagem: "copo.png", audio: "声音/beizi.mp3" },
        { caractere: "桌子", pinyin: "zhuō zi", significado: "mesa", imagem: "mesa.png", audio: "声音/zhuozi.mp3" },
        { caractere: "椅子", pinyin: "yǐ zi", significado: "cadeira", imagem: "cadeira.png", audio: "声音/yizi.mp3" },
        { caractere: "筷子", pinyin: "kuài zi", significado: "hashis", imagem: "hashi.png", audio: "声音/kuaizi.mp3" },
        { caractere: "勺子", pinyin: "sháo zi", significado: "colher", imagem: "colher.png", audio: "声音/shaozi.mp3" },
        { caractere: "笔", pinyin: "bǐ", significado: "caneta / lápis", imagem: "caneta.png", audio: "声音/bi.mp3" },
        { caractere: "窗户", pinyin: "chuāng hu", significado: "janela", imagem: "janela.png", audio: "声音/chuanghu.mp3" },
        { caractere: "花瓶", pinyin: "huā píng", significado: "vaso de flores", imagem: "vaso.png", audio: "声音/huaping.mp3" },
        { caractere: "橡皮", pinyin: "xiàng pí", significado: "borracha", imagem: "borracha.png", audio: "声音/xiangpi.mp3" },
        { caractere: "雨伞", pinyin: "yǔ sǎn", significado: "guarda-chuva", imagem: "guarda-chuva.png", audio: "声音/yusan.mp3" },
        { caractere: "电脑", pinyin: "diàn nǎo", significado: "computador", imagem: "computador.png", audio: "声音/diannao.mp3" },
        { caractere: "手机", pinyin: "shǒu jī", significado: "celular", imagem: "celular.png", audio: "声音/shouji.mp3" },
        { caractere: "钥匙", pinyin: "yào shi", significado: "chave", imagem: "chave.png", audio: "声音/yaoshi.mp3" },
        { caractere: "钱包", pinyin: "qián bāo", significado: "carteira", imagem: "carteira.png", audio: "声音/qianbao.mp3" },
        { caractere: "门", pinyin: "mén", significado: "porta", imagem: "porta.png", audio: "声音/men.mp3" },
        { caractere: "床", pinyin: "chuáng", significado: "cama", imagem: "cama.png", audio: "声音/chuang.mp3" }
    ],

    profissoes: [
        { caractere: "医生", pinyin: "yī shēng", significado: "médico", imagem: "medico.png", audio: "声音/yisheng.mp3" },
        { caractere: "老师", pinyin: "lǎo shī", significado: "professor", imagem: "professor.png", audio: "声音/laoshi.mp3" },
        { caractere: "律师", pinyin: "lǜ shī", significado: "advogado", imagem: "advogado.png", audio: "声音/lvshi.mp3" },
        { caractere: "售货员", pinyin: "shòu huò yuán", significado: "vendedor", imagem: "vendedor.png", audio: "声音/shouhuoyuan.mp3" },
        { caractere: "服务员", pinyin: "fú wù yuán", significado: "garçom / atendente", imagem: "garcom.png", audio: "声音/fuwuyuan.mp3" },
        { caractere: "清洁工", pinyin: "qīng jié gōng", significado: "faxineiro", imagem: "faxineiro.png", audio: "声音/qingjiegong.mp3" },
        { caractere: "司机", pinyin: "sī jī", significado: "motorista", imagem: "motorista.png", audio: "声音/siji.mp3" },
        { caractere: "厨师", pinyin: "chú shī", significado: "cozinheiro", imagem: "cozinheiro.png", audio: "声音/chushi.mp3" },
        { caractere: "工程师", pinyin: "gōng chéng shī", significado: "engenheiro", imagem: "engenheiro.png", audio: "声音/gongchengshi.mp3" },
        { caractere: "经理", pinyin: "jīng lǐ", significado: "gerente", imagem: "gerente.png", audio: "声音/jingli.mp3" },
        { caractere: "秘书", pinyin: "mì shū", significado: "secretário", imagem: "secretario.png", audio: "声音/mishu.mp3" }
    ],

    lugares: [
        { caractere: "公司", pinyin: "gōng sī", significado: "empresa", imagem: "empresa.png", audio: "声音/gongsi.mp3" },
        { caractere: "学校", pinyin: "xué xiào", significado: "escola", imagem: "escola.png", audio: "声音/xuexiao.mp3" },
        { caractere: "医院", pinyin: "yī yuàn", significado: "hospital", imagem: "hospital.png", audio: "声音/yiyuan.mp3" },
        { caractere: "银行", pinyin: "yín háng", significado: "banco", imagem: "banco.png", audio: "声音/yinhang.mp3" },
        { caractere: "邮局", pinyin: "yóu jú", significado: "correio", imagem: "correio.png", audio: "声音/youju.mp3" },
        { caractere: "饭店", pinyin: "fàn diàn", significado: "restaurante", imagem: "restaurante.png", audio: "声音/fandian.mp3" },
        { caractere: "面包店", pinyin: "miàn bāo diàn", significado: "padaria", imagem: "padaria.png", audio: "声音/mianbaodian.mp3" },
        { caractere: "地铁站", pinyin: "dì tiě zhàn", significado: "estação de metrô", imagem: "estacao-metro.png", audio: "声音/ditiezhan.mp3" },
        { caractere: "车站", pinyin: "chē zhàn", significado: "estação (rodoviária)", imagem: "rodoviaria.png", audio: "声音/chezhan.mp3" },
        { caractere: "机场", pinyin: "jī chǎng", significado: "aeroporto", imagem: "aeroporto.png", audio: "声音/jichang.mp3" }
    ],

    classificadores: [
        { caractere: "一个人", pinyin: "yí gè rén", significado: "1 pessoa (个 gè: classificador genérico)", imagem: "pessoa.png", audio: "声音/yigeren.mp3" },
        { caractere: "两只猫", pinyin: "liǎng zhī māo", significado: "2 gatos (只 zhī: para animais pequenos)", imagem: "gatos.png", audio: "声音/liangzhimao.mp3" },
        { caractere: "三条狗", pinyin: "sān tiáo gǒu", significado: "3 cães (条 tiáo: coisas compridas ou animais)", imagem: "caes.png", audio: "声音/santiaogou.mp3" },
        { caractere: "四片面包", pinyin: "sì piàn miàn bāo", significado: "4 fatias de pão (片 piàn: para fatias finas)", imagem: "fatias-pao.png", audio: "声音/sipianmianbao.mp3" },
        { caractere: "五副眼镜", pinyin: "wǔ fù yǎn jìng", significado: "5 pares de óculos (副 fù: para objetos em pares)", imagem: "pares-oculos.png", audio: "声音/wufuyanjing.mp3" }
    ]
};