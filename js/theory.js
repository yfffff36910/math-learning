var theoryData = {
  "jihe": {
    "title": "集合与逻辑",
    "content": [
      {
        "type": "h2",
        "text": "一、集合的基本概念"
      },
      {
        "type": "p",
        "text": "集合是数学中最基本且最重要的概念之一。一般地，我们把能够明确区分的不同研究对象统称为元素，把这些元素组成的总体叫做集合（简称集）。"
      },
      {
        "type": "h3",
        "text": "1. 集合的三个特性"
      },
      {
        "type": "p",
        "text": "确定性：给定一个集合，任何一个对象是否属于这个集合都是确定的。即对于任意一个元素a和集合A，要么a∈A，要么a∉A，不能模棱两可。这是集合最重要的特征。"
      },
      {
        "type": "p",
        "text": "互异性：集合中的元素是互不相同的。同一个元素在集合中只能出现一次。例如{1,1,2}应写作{1,2}。"
      },
      {
        "type": "p",
        "text": "无序性：集合中的元素没有排列顺序。{1,2,3}和{3,1,2}表示同一个集合。"
      },
      {
        "type": "example",
        "text": "例：下列能构成集合的是（ ）\nA. 高个子的同学  B. 很小的数  C. 不超过10的质数  D. 好看的电影\n解：A、B、D中的标准都不确定，不能构成集合。C中不超过10的质数是2,3,5,7，是确定的，能构成集合。"
      },
      {
        "type": "h3",
        "text": "2. 元素与集合的关系"
      },
      {
        "type": "p",
        "text": "如果a是集合A的元素，就说a属于A，记作a∈A。"
      },
      {
        "type": "p",
        "text": "如果a不是集合A的元素，就说a不属于A，记作a∉A。"
      },
      {
        "type": "h3",
        "text": "3. 常用数集及其记法"
      },
      {
        "type": "ul",
        "items": [
          "N：自然数集（包括0）：{0,1,2,3,...}",
          "N*（或N⁺）：正整数集：{1,2,3,...}",
          "Z：整数集：{...,-2,-1,0,1,2,...}",
          "Q：有理数集（包括有限小数和无限循环小数）",
          "R：实数集（包括有理数和无理数）",
          "C：复数集：{a+bi | a,b∈R}"
        ]
      },
      {
        "type": "h3",
        "text": "4. 集合的表示方法"
      },
      {
        "type": "p",
        "text": "列举法：将集合中的元素一一列出，用花括号括起来。适用于元素个数较少的集合。"
      },
      {
        "type": "formula",
        "text": "例：{1,2,3,4,5} 表示1到5的自然数集合\n例：{x²-3x+2=0的根} = {1,2}"
      },
      {
        "type": "p",
        "text": "描述法：用集合中元素的共同特征来表示集合。基本形式为{代表元素 | 代表元素满足的条件}。"
      },
      {
        "type": "formula",
        "text": "例：{x ∈ R | x > 0} 表示所有正实数\n例：{(x,y) | x²+y²=1} 表示单位圆上的所有点"
      },
      {
        "type": "p",
        "text": "韦恩图法：用平面上封闭曲线的内部表示集合（常用于表示集合之间的关系和运算）。"
      },
      {
        "type": "h3",
        "text": "5. 集合的分类"
      },
      {
        "type": "ul",
        "items": [
          "有限集：含有有限个元素的集合，如{1,2,3}",
          "无限集：含有无限个元素的集合，如N、Z、R",
          "空集：不含任何元素的集合，记作∅。注意：{0}不是空集，它含有一个元素0"
        ]
      },
      {
        "type": "note",
        "text": "易错提醒：∅与{0}的区别。∅是不含任何元素的集合，而{0}是含有一个元素0的集合。因此∅⊆{0}但∅∉{0}。"
      },
      {
        "type": "h2",
        "text": "二、集合间的基本关系"
      },
      {
        "type": "h3",
        "text": "1. 子集"
      },
      {
        "type": "p",
        "text": "对于两个集合A、B，如果集合A的每一个元素都属于集合B，那么称集合A是集合B的子集，记作A⊆B（或B⊇A）。"
      },
      {
        "type": "formula",
        "text": "A⊆B ⇔ 对∀x∈A，都有x∈B"
      },
      {
        "type": "ul",
        "items": [
          "任何集合都是它本身的子集：A⊆A",
          "规定：空集是任何集合的子集：∅⊆A",
          "若A⊆B且B⊆C，则A⊆C（传递性）"
        ]
      },
      {
        "type": "h3",
        "text": "2. 真子集"
      },
      {
        "type": "p",
        "text": "如果A⊆B且A≠B，那么称A是B的真子集，记作A⊂B（或B⊃A）。"
      },
      {
        "type": "formula",
        "text": "性质：若A有n个元素，则\nA的子集个数为：2ⁿ\nA的真子集个数为：2ⁿ-1\nA的非空真子集个数为：2ⁿ-2"
      },
      {
        "type": "example",
        "text": "例：已知A={a,b,c}，求A的子集个数和真子集个数。\n解：n=3，子集个数=2³=8，真子集个数=2³-1=7\n8个子集为：∅,{a},{b},{c},{a,b},{a,c},{b,c},{a,b,c}"
      },
      {
        "type": "h3",
        "text": "3. 集合相等"
      },
      {
        "type": "p",
        "text": "如果A⊆B且B⊆A，则称A=B，即两个集合的元素完全相同。"
      },
      {
        "type": "formula",
        "text": "A=B ⇔ A⊆B 且 B⊆A"
      },
      {
        "type": "h2",
        "text": "三、集合的基本运算"
      },
      {
        "type": "h3",
        "text": "1. 交集"
      },
      {
        "type": "p",
        "text": "由所有属于集合A且属于集合B的元素组成的集合，叫做A与B的交集。"
      },
      {
        "type": "formula",
        "text": "A∩B = {x | x∈A 且 x∈B}"
      },
      {
        "type": "ul",
        "items": [
          "A∩A = A",
          "A∩∅ = ∅",
          "A∩B ⊆ A，A∩B ⊆ B",
          "A∩B = B∩A（交换律）"
        ]
      },
      {
        "type": "h3",
        "text": "2. 并集"
      },
      {
        "type": "p",
        "text": "由所有属于集合A或属于集合B的元素组成的集合，叫做A与B的并集。"
      },
      {
        "type": "formula",
        "text": "A∪B = {x | x∈A 或 x∈B}"
      },
      {
        "type": "ul",
        "items": [
          "A∪A = A",
          "A∪∅ = A",
          "A ⊆ A∪B，B ⊆ A∪B",
          "A∪B = B∪A（交换律）"
        ]
      },
      {
        "type": "h3",
        "text": "3. 补集"
      },
      {
        "type": "p",
        "text": "若U是全集，A是U的子集，则由U中所有不属于A的元素组成的集合叫做A在U中的补集。"
      },
      {
        "type": "formula",
        "text": "∁UA = {x | x∈U 且 x∉A}"
      },
      {
        "type": "h3",
        "text": "4. 运算律（德摩根定律）"
      },
      {
        "type": "formula",
        "text": "∁U(A∩B) = ∁UA ∪ ∁UB\n∁U(A∪B) = ∁UA ∩ ∁UB"
      },
      {
        "type": "example",
        "text": "例：已知U=R，A={x | x<1}，B={x | x≥0}，求A∩B、A∪B、∁UA、∁UB。\n解：A∩B = {x | 0≤x<1}\nA∪B = R\n∁UA = {x | x≥1}\n∁UB = {x | x<0}"
      },
      {
        "type": "h2",
        "text": "四、充分条件与必要条件"
      },
      {
        "type": "h3",
        "text": "1. 定义"
      },
      {
        "type": "p",
        "text": "如果p⇒q，那么p是q的充分条件，q是p的必要条件。"
      },
      {
        "type": "p",
        "text": "如果p⇔q，那么p是q的充要条件。"
      },
      {
        "type": "ul",
        "items": [
          "p⇒q但q⇏p：p是q的充分不必要条件",
          "q⇒p但p⇏q：p是q的必要不充分条件",
          "p⇒q且q⇒p：p是q的充要条件（简称充要条件）",
          "p⇏q且q⇏p：p是q的既不充分也不必要条件"
        ]
      },
      {
        "type": "example",
        "text": "例：判断x>1是x²>1的什么条件？\n解：x>1⇒x²>1成立（充分性）\n但x²>1⇒x>1或x<-1，不一定推出x>1（必要性不成立）\n所以x>1是x²>1的充分不必要条件。"
      },
      {
        "type": "h2",
        "text": "五、全称量词与存在量词"
      },
      {
        "type": "h3",
        "text": "1. 全称量词"
      },
      {
        "type": "p",
        "text": "符号∀表示\"任意\"、\"所有\"、\"每一个\"等。"
      },
      {
        "type": "formula",
        "text": "∀x∈M, p(x)表示：对M中任意一个x，p(x)都成立"
      },
      {
        "type": "h3",
        "text": "2. 存在量词"
      },
      {
        "type": "p",
        "text": "符号∃表示\"存在\"、\"有一个\"、\"至少有一个\"等。"
      },
      {
        "type": "formula",
        "text": "∃x∈M, p(x)表示：存在M中的一个x，使p(x)成立"
      },
      {
        "type": "h3",
        "text": "3. 含有一个量词的命题的否定"
      },
      {
        "type": "formula",
        "text": "¬(∀x∈M, p(x)) ⇔ ∃x∈M, ¬p(x)\n¬(∃x∈M, p(x)) ⇔ ∀x∈M, ¬p(x)"
      },
      {
        "type": "example",
        "text": "例：写出下列命题的否定\n（1）∀x∈R，x² ≥ 0\n（2）∃x∈R，x²+1=0\n解：（1）∃x∈R，x² < 0\n（2）∀x∈R，x²+1 ≠ 0"
      }
    ]
  },
  "hanshu": {
    "title": "函数",
    "content": [
      {
        "type": "h2",
        "text": "一、函数的概念与三要素"
      },
      {
        "type": "p",
        "text": "设A、B是非空的数集，如果按照某种确定的对应关系f，对于集合A中的任意一个数x，在集合B中都有唯一确定的数f(x)与之对应，那么称f：A→B为从集合A到集合B的一个函数。"
      },
      {
        "type": "formula",
        "text": "y = f(x), x∈A（定义域）\nf(x)叫做函数值，{f(x)|x∈A}叫做值域"
      },
      {
        "type": "h3",
        "text": "函数的三要素"
      },
      {
        "type": "ul",
        "items": [
          "定义域：自变量x的取值范围",
          "对应关系：定义域到值域的单值对应法则f",
          "值域：函数值f(x)的取值范围"
        ]
      },
      {
        "type": "p",
        "text": "两个函数相同当且仅当定义域和对应关系都相同（与用什么字母表示无关）。"
      },
      {
        "type": "h2",
        "text": "二、函数的定义域"
      },
      {
        "type": "p",
        "text": "求函数定义域的基本原则："
      },
      {
        "type": "ul",
        "items": [
          "分式中分母不能为0",
          "偶次根式中被开方数≥0（奇次根式可以为任意实数）",
          "对数中真数>0，底数>0且≠1",
          "指数式中底数>0且≠1",
          "正切函数中x≠π/2+kπ(k∈Z)",
          "实际问题中要考虑实际意义"
        ]
      },
      {
        "type": "example",
        "text": "例：求f(x)=√(x+2) + 1/(x-1)的定义域\n解：√(x+2) ⇒ x+2≥0 ⇒ x≥-2\n1/(x-1) ⇒ x-1≠0 ⇒ x≠1\n所以定义域为 {x|x≥-2且x≠1}"
      },
      {
        "type": "h2",
        "text": "三、函数的表示法"
      },
      {
        "type": "ul",
        "items": [
          "解析法：用数学表达式表示函数关系，如f(x)=x²",
          "列表法：列出部分自变量的值及其对应的函数值",
          "图象法：在坐标系中画出函数图像"
        ]
      },
      {
        "type": "p",
        "text": "这三种方法各有优缺点，常结合使用。"
      },
      {
        "type": "h2",
        "text": "四、函数的单调性"
      },
      {
        "type": "p",
        "text": "定义：对于定义域I内某个区间D上的任意两个自变量的值x₁、x₂，"
      },
      {
        "type": "ul",
        "items": [
          "当x₁<x₂时都有f(x₁)<f(x₂) ⇒ f(x)在D上是增函数",
          "当x₁<x₂时都有f(x₁)>f(x₂) ⇒ f(x)在D上是减函数"
        ]
      },
      {
        "type": "p",
        "text": "判断方法："
      },
      {
        "type": "ul",
        "items": [
          "定义法：设x₁<x₂，计算f(x₁)-f(x₂)的符号",
          "导数法：f'(x)>0 ⇒ 增函数；f'(x)<0 ⇒ 减函数",
          "图象法：观察图象的上升或下降趋势",
          "性质法：增+增=增；减+减=减；-增=减等"
        ]
      },
      {
        "type": "example",
        "text": "例：用定义法证明f(x)=x+1/x在(1,+∞)上是增函数\n证明：设x₂>x₁>1\nf(x₂)-f(x₁) = (x₂+1/x₂)-(x₁+1/x₁)\n= (x₂-x₁) + (1/x₂-1/x₁)\n= (x₂-x₁) - (x₂-x₁)/(x₁x₂)\n= (x₂-x₁)(1 - 1/(x₁x₂))\n∵x₂>x₁, x₁x₂>1，所以1-1/(x₁x₂)>0\n∴f(x₂)-f(x₁)>0，即f(x)在(1,+∞)上是增函数"
      },
      {
        "type": "h2",
        "text": "五、函数的奇偶性"
      },
      {
        "type": "p",
        "text": "定义：设函数f(x)的定义域D关于原点对称（即x∈D⇒-x∈D）"
      },
      {
        "type": "ul",
        "items": [
          "如果∀x∈D，f(-x)=-f(x)，则f(x)为奇函数（图象关于原点对称）",
          "如果∀x∈D，f(-x)=f(x)，则f(x)为偶函数（图象关于y轴对称）"
        ]
      },
      {
        "type": "note",
        "text": "判断奇偶性前必须先检查定义域是否关于原点对称！"
      },
      {
        "type": "formula",
        "text": "奇函数性质：\n· 在x=0处有定义时，f(0)=0\n· f(-x)=-f(x)\n· 图象关于原点对称\n偶函数性质：\n· f(-x)=f(x)\n· 图象关于y轴对称"
      },
      {
        "type": "example",
        "text": "例：判断f(x)=x³-3x的奇偶性\n解：定义域R关于原点对称\nf(-x)=(-x)³-3(-x)=-x³+3x=-(x³-3x)=-f(x)\n所以f(x)是奇函数"
      },
      {
        "type": "h2",
        "text": "六、基本初等函数"
      },
      {
        "type": "h3",
        "text": "1. 一次函数 y=kx+b (k≠0)"
      },
      {
        "type": "ul",
        "items": [
          "定义域R，值域R",
          "k>0时是增函数，k<0时是减函数",
          "|k|越大，直线越陡",
          "过点(0,b)，(-b/k,0)"
        ]
      },
      {
        "type": "h3",
        "text": "2. 二次函数 y=ax²+bx+c (a≠0)"
      },
      {
        "type": "formula",
        "text": "顶点式：y=a(x-h)²+k，顶点(h,k)\n其中h=-b/(2a)，k=(4ac-b²)/(4a)\n对称轴：x=-b/(2a)\n判别式：Δ=b²-4ac"
      },
      {
        "type": "ul",
        "items": [
          "a>0时开口向上，a<0时开口向下",
          "Δ>0时与x轴有两个交点；Δ=0时有一个；Δ<0时没有",
          "单调性：a>0时(-∞,-b/(2a)]递减，[-b/(2a),+∞)递增"
        ]
      },
      {
        "type": "h3",
        "text": "3. 指数函数 y=aˣ (a>0且a≠1)"
      },
      {
        "type": "ul",
        "items": [
          "定义域R，值域(0,+∞)",
          "过定点(0,1)",
          "a>1时是增函数；0<a<1时是减函数",
          "图象在x轴上方"
        ]
      },
      {
        "type": "formula",
        "text": "指数运算法则：\na^m·a^n=a^(m+n)\na^m÷a^n=a^(m-n)\n(a^m)^n=a^(mn)\n(ab)^n=a^n·b^n"
      },
      {
        "type": "h3",
        "text": "4. 对数函数 y=logₐx (a>0且a≠1)"
      },
      {
        "type": "ul",
        "items": [
          "定义域(0,+∞)，值域R",
          "过定点(1,0)",
          "a>1时是增函数；0<a<1时是减函数",
          "图象在y轴右侧"
        ]
      },
      {
        "type": "formula",
        "text": "对数运算法则：\nlogₐ(MN)=logₐM+logₐN\nlogₐ(M/N)=logₐM-logₐN\nlogₐM^n=n·logₐM\n换底公式：logₐb=log_cb/log_ca\n重要恒等式：a^(logₐN)=N"
      },
      {
        "type": "h3",
        "text": "5. 幂函数 y=x^α"
      },
      {
        "type": "ul",
        "items": [
          "α为正偶数时，定义域R，是偶函数",
          "α为正奇数时，定义域R，是奇函数",
          "α为分数时需注意定义域",
          "α<0时图象不过原点"
        ]
      },
      {
        "type": "h2",
        "text": "七、函数的零点与方程"
      },
      {
        "type": "p",
        "text": "对于函数y=f(x)，使f(x)=0的实数x叫做函数的零点。"
      },
      {
        "type": "formula",
        "text": "零点存在定理：\n若函数y=f(x)在区间[a,b]上的图象是连续不断的一条曲线，且f(a)·f(b)<0，则函数y=f(x)在区间(a,b)内有零点，即存在c∈(a,b)使得f(c)=0。"
      },
      {
        "type": "note",
        "text": "零点存在定理只能判断存在零点，不能确定零点个数。"
      },
      {
        "type": "example",
        "text": "例：证明方程x³+x-3=0在(1,2)内有解\n证明：设f(x)=x³+x-3，f(x)在[1,2]上连续\nf(1)=1+1-3=-1<0\nf(2)=8+2-3=7>0\nf(1)·f(2)<0，所以f(x)在(1,2)内有零点\n即方程x³+x-3=0在(1,2)内有解"
      }
    ]
  },
  "sanhan": {
    "title": "三角函数",
    "content": [
      {
        "type": "h2",
        "text": "一、任意角与弧度制"
      },
      {
        "type": "h3",
        "text": "1. 角的概念的推广"
      },
      {
        "type": "p",
        "text": "按逆时针方向旋转形成的角叫做正角，顺时针方向旋转形成的角叫做负角，没有旋转形成零角。"
      },
      {
        "type": "p",
        "text": "所有与角α终边相同的角，连同角α在内，可表示为：{β|β=α+k·360°,k∈Z}"
      },
      {
        "type": "h3",
        "text": "2. 弧度制"
      },
      {
        "type": "p",
        "text": "把长度等于半径长的弧所对的圆心角叫做1弧度（rad）的角。"
      },
      {
        "type": "formula",
        "text": "角度与弧度互化：\n180°=π rad\n1°=π/180 rad ≈ 0.01745 rad\n1 rad=180°/π ≈ 57.30°\n\n弧长公式：l=α·r（α为弧度制）\n扇形面积公式：S=½lr=½α·r²"
      },
      {
        "type": "h2",
        "text": "二、三角函数的定义"
      },
      {
        "type": "p",
        "text": "设角α终边上一点P(x,y)，r=|OP|=√(x²+y²)"
      },
      {
        "type": "formula",
        "text": "sinα = y/r\ncosα = x/r\ntanα = y/x (x≠0)\ncotα = x/y (y≠0)\ncscα = r/y (y≠0)\nsecα = r/x (x≠0)"
      },
      {
        "type": "h3",
        "text": "各象限三角函数值的符号"
      },
      {
        "type": "ul",
        "items": [
          "第一象限：sin>0, cos>0, tan>0",
          "第二象限：sin>0, cos<0, tan<0",
          "第三象限：sin<0, cos<0, tan>0",
          "第四象限：sin<0, cos>0, tan<0"
        ]
      },
      {
        "type": "note",
        "text": "记忆口诀：一全正、二正弦、三正切、四余弦"
      },
      {
        "type": "h2",
        "text": "三、同角三角函数关系"
      },
      {
        "type": "formula",
        "text": "平方关系：sin²α+cos²α=1\n商数关系：tanα=sinα/cosα (cosα≠0)\n倒数关系：cscα=1/sinα, secα=1/cosα, cotα=1/tanα"
      },
      {
        "type": "h2",
        "text": "四、诱导公式"
      },
      {
        "type": "p",
        "text": "诱导公式可概括为：奇变偶不变，符号看象限"
      },
      {
        "type": "p",
        "text": "「奇变偶不变」指k·π/2±α(k∈Z)中，k为奇数时正弦变余弦、余弦变正弦、正切变余切（函数名改变）；k为偶数时函数名不变。"
      },
      {
        "type": "p",
        "text": "「符号看象限」指将α看作锐角时，原三角函数值在相应象限的符号。"
      },
      {
        "type": "formula",
        "text": "常用诱导公式：\nsin(π-α)=sinα\ncos(π-α)=-cosα\ntan(π-α)=-tanα\n\nsin(π+α)=-sinα\ncos(π+α)=-cosα\ntan(π+α)=tanα\n\nsin(2π-α)=-sinα\ncos(2π-α)=cosα\ntan(2π-α)=-tanα\n\nsin(π/2-α)=cosα\ncos(π/2-α)=sinα"
      },
      {
        "type": "h2",
        "text": "五、三角函数的图像与性质"
      },
      {
        "type": "h3",
        "text": "1. 正弦函数 y=sin x"
      },
      {
        "type": "ul",
        "items": [
          "定义域：R",
          "值域：[-1,1]",
          "最小正周期：2π",
          "奇函数（图象关于原点对称）",
          "在[-π/2+2kπ, π/2+2kπ]上递增",
          "在[π/2+2kπ, 3π/2+2kπ]上递减",
          "最大值1（x=π/2+2kπ），最小值-1（x=-π/2+2kπ）"
        ]
      },
      {
        "type": "h3",
        "text": "2. 余弦函数 y=cos x"
      },
      {
        "type": "ul",
        "items": [
          "定义域：R",
          "值域：[-1,1]",
          "最小正周期：2π",
          "偶函数（图象关于y轴对称）",
          "在[-π+2kπ, 2kπ]上递增",
          "在[2kπ, π+2kπ]上递减",
          "最大值1（x=2kπ），最小值-1（x=π+2kπ）"
        ]
      },
      {
        "type": "h3",
        "text": "3. 正切函数 y=tan x"
      },
      {
        "type": "ul",
        "items": [
          "定义域：{x|x≠π/2+kπ,k∈Z}",
          "值域：R",
          "最小正周期：π",
          "奇函数（图象关于原点对称）",
          "在每个区间(-π/2+kπ, π/2+kπ)内递增",
          "有垂直渐近线x=π/2+kπ"
        ]
      },
      {
        "type": "h2",
        "text": "六、和差角公式"
      },
      {
        "type": "formula",
        "text": "sin(α±β)=sinαcosβ±cosαsinβ\ncos(α±β)=cosαcosβ∓sinαsinβ\ntan(α±β)=(tanα±tanβ)/(1∓tanαtanβ)"
      },
      {
        "type": "h2",
        "text": "七、倍角公式与半角公式"
      },
      {
        "type": "formula",
        "text": "二倍角公式：\nsin2α=2sinαcosα\ncos2α=cos²α-sin²α=2cos²α-1=1-2sin²α\ntan2α=2tanα/(1-tan²α)\n\n降幂公式：\nsin²α=(1-cos2α)/2\ncos²α=(1+cos2α)/2"
      },
      {
        "type": "h2",
        "text": "八、正、余弦定理（解三角形）"
      },
      {
        "type": "h3",
        "text": "正弦定理"
      },
      {
        "type": "formula",
        "text": "a/sinA = b/sinB = c/sinC = 2R\n（R为△ABC外接圆半径）"
      },
      {
        "type": "h3",
        "text": "余弦定理"
      },
      {
        "type": "formula",
        "text": "a²=b²+c²-2bc·cosA\nb²=a²+c²-2ac·cosB\nc²=a²+b²-2ab·cosC"
      },
      {
        "type": "h3",
        "text": "面积公式"
      },
      {
        "type": "formula",
        "text": "S=½bc·sinA=½ac·sinB=½ab·sinC\nS=½(a+b+c)r（r为内切圆半径）\nS=abc/(4R)（R为外接圆半径）"
      },
      {
        "type": "example",
        "text": "例：在△ABC中，a=2,b=3,C=60°，求c。\n解：由余弦定理\nc²=a²+b²-2ab·cosC\n=4+9-2×2×3×½=7\nc=√7"
      }
    ]
  },
  "shulie": {
    "title": "数列",
    "content": [
      {
        "type": "h2",
        "text": "一、数列的概念与表示"
      },
      {
        "type": "p",
        "text": "按一定次序排列的一列数称为数列。数列中的每一个数叫做数列的项。数列的一般形式为a₁,a₂,a₃,...,aₙ,..."
      },
      {
        "type": "formula",
        "text": "通项公式：aₙ=f(n)（表示第n项与序号n的关系）\n递推公式：用前项表示后项的公式"
      },
      {
        "type": "h3",
        "text": "数列的分类"
      },
      {
        "type": "ul",
        "items": [
          "按项数：有穷数列（项数有限）、无穷数列（项数无限）",
          "按变化趋势：递增数列、递减数列、常数列、摆动数列"
        ]
      },
      {
        "type": "h2",
        "text": "二、等差数列"
      },
      {
        "type": "h3",
        "text": "1. 定义"
      },
      {
        "type": "p",
        "text": "从第2项起，每一项与它的前一项的差等于同一个常数d，则称此数列为等差数列。"
      },
      {
        "type": "formula",
        "text": "a_{n+1}-aₙ=d（常数d为公差）"
      },
      {
        "type": "h3",
        "text": "2. 通项公式"
      },
      {
        "type": "formula",
        "text": "aₙ=a₁+(n-1)d\n或aₙ=a_m+(n-m)d"
      },
      {
        "type": "h3",
        "text": "3. 等差中项"
      },
      {
        "type": "p",
        "text": "若a,G,b成等差数列，则G=(a+b)/2，G叫做a与b的等差中项。"
      },
      {
        "type": "h3",
        "text": "4. 前n项和公式"
      },
      {
        "type": "formula",
        "text": "Sₙ=n(a₁+aₙ)/2\nSₙ=na₁+n(n-1)d/2"
      },
      {
        "type": "note",
        "text": "重要性质：\n· 若m+n=p+q，则a_m+a_n=a_p+a_q\n· 等差数列中连续等长片段的和仍成等差数列\n· Sₙ=An²+Bn（常数项为0的二次函数）"
      },
      {
        "type": "example",
        "text": "例：等差数列{aₙ}中，a₃=7，a₇=19，求a₁和d。\n解：a₃=a₁+2d=7\na₇=a₁+6d=19\n相减得4d=12⇒d=3，代入得a₁=1\n∴通项aₙ=1+(n-1)×3=3n-2"
      },
      {
        "type": "h2",
        "text": "三、等比数列"
      },
      {
        "type": "h3",
        "text": "1. 定义"
      },
      {
        "type": "p",
        "text": "从第2项起，每一项与它的前一项的比等于同一个常数q(q≠0)，则称此数列为等比数列。"
      },
      {
        "type": "formula",
        "text": "a_{n+1}/aₙ=q（q为公比）"
      },
      {
        "type": "h3",
        "text": "2. 通项公式"
      },
      {
        "type": "formula",
        "text": "aₙ=a₁·qⁿ⁻¹\n或aₙ=a_m·qⁿ⁻ᵐ"
      },
      {
        "type": "h3",
        "text": "3. 等比中项"
      },
      {
        "type": "p",
        "text": "若a,G,b成等比数列，则G²=ab（G叫做a与b的等比中项）。"
      },
      {
        "type": "h3",
        "text": "4. 前n项和公式"
      },
      {
        "type": "formula",
        "text": "Sₙ=na₁（q=1时）\nSₙ=a₁(1-qⁿ)/(1-q)（q≠1时）"
      },
      {
        "type": "note",
        "text": "重要性质：\n· 若m+n=p+q，则a_m·a_n=a_p·a_q\n· 等比数列中连续等长片段的和仍成等比数列\n· 当|q|<1时，无穷等比数列各项和S=a₁/(1-q)"
      },
      {
        "type": "example",
        "text": "例：等比数列{aₙ}中，a₂=2，a₅=16，求a₇。\n解：a₅=a₂·q³⇒16=2q³⇒q=2\na₇=a₂·q⁵=2×32=64"
      },
      {
        "type": "h2",
        "text": "四、数列求和常用方法"
      },
      {
        "type": "ul",
        "items": [
          "公式法：等差、等比数列直接套用公式",
          "裂项相消法：如1/[n(n+1)]=1/n-1/(n+1)",
          "错位相减法：适用于等差×等比型数列",
          "分组求和法：将数列拆分为几个可求和的数列"
        ]
      },
      {
        "type": "example",
        "text": "例：求数列1/2 + 1/6 + 1/12 + ... + 1/[n(n+1)]的和\n解：1/[n(n+1)]=1/n-1/(n+1)\nSₙ=(1-½)+(½-⅓)+...+(1/n-1/(n+1))\n=1-1/(n+1)=n/(n+1)"
      }
    ]
  },
  "jibe": {
    "title": "立体几何",
    "content": [
      {
        "type": "h2",
        "text": "一、空间几何体的结构"
      },
      {
        "type": "h3",
        "text": "1. 多面体"
      },
      {
        "type": "p",
        "text": "由若干个平面多边形围成的几何体叫做多面体。"
      },
      {
        "type": "ul",
        "items": [
          "棱柱：有两个面互相平行，其余各面都是四边形，且相邻四边形的公共边互相平行",
          "棱锥：有一个面是多边形，其余各面是有一个公共顶点的三角形",
          "棱台：用一个平行于棱锥底面的平面截棱锥，底面与截面之间的部分"
        ]
      },
      {
        "type": "h3",
        "text": "2. 旋转体"
      },
      {
        "type": "ul",
        "items": [
          "圆柱：以矩形一边为轴旋转一周形成的曲面围成的几何体",
          "圆锥：以直角三角形一直角边为轴旋转一周形成的曲面围成的几何体",
          "圆台：用平行于圆锥底面的平面截圆锥，底面与截面之间的部分",
          "球：以半圆的直径为轴，旋转一周形成的曲面围成的几何体"
        ]
      },
      {
        "type": "h2",
        "text": "二、空间几何体的表面积与体积"
      },
      {
        "type": "h3",
        "text": "1. 表面积（侧面积+底面积）"
      },
      {
        "type": "formula",
        "text": "圆柱侧面积：S=2πrh\n圆锥侧面积：S=πrl（l为母线长）\n圆台侧面积：S=π(r₁+r₂)l\n球表面积：S=4πR²"
      },
      {
        "type": "h3",
        "text": "2. 体积"
      },
      {
        "type": "formula",
        "text": "柱体体积：V=Sh\n锥体体积：V=Sh/3\n台体体积：V=(S₁+S₂+√(S₁S₂))h/3\n球体积：V=4πR³/3"
      },
      {
        "type": "example",
        "text": "例：圆锥底面半径为3，高为4，求其体积和侧面积。\n解：母線l=√(3²+4²)=5\nV=π×3²×4/3=12π\nS侧=π×3×5=15π"
      },
      {
        "type": "h2",
        "text": "三、空间中点、线、面的位置关系"
      },
      {
        "type": "h3",
        "text": "1. 平行判定与性质"
      },
      {
        "type": "ul",
        "items": [
          "线线平行：同一平面内不相交的两条直线",
          "线面平行判定：a∥b，b⊂α，a⊄α⇒a∥α",
          "面面平行判定：平面α内两条相交直线都平行于平面β⇒α∥β"
        ]
      },
      {
        "type": "h3",
        "text": "2. 垂直判定与性质"
      },
      {
        "type": "ul",
        "items": [
          "线线垂直：所成角为90°",
          "线面垂直判定：l⊥a，l⊥b，a∩b=P，a、b⊂α⇒l⊥α",
          "面面垂直判定：l⊥β，l⊂α⇒α⊥β"
        ]
      },
      {
        "type": "h2",
        "text": "四、空间向量在立体几何中的应用"
      },
      {
        "type": "p",
        "text": "利用空间直角坐标系和向量运算解决立体几何问题，是高考中的重要解题方法。"
      },
      {
        "type": "formula",
        "text": "异面直线夹角：cosθ=|AB·CD|/(|AB|·|CD|)\n线面角：sinθ=|n·AB|/(|n|·|AB|)\n二面角：cosθ=|n₁·n₂|/(|n₁|·|n₂|)\n点到平面距离：d=|n·AP|/|n|"
      }
    ]
  },
  "jieji": {
    "title": "解析几何",
    "content": [
      {
        "type": "h2",
        "text": "一、直线与方程"
      },
      {
        "type": "h3",
        "text": "1. 直线方程的五种形式"
      },
      {
        "type": "formula",
        "text": "点斜式：y-y₀=k(x-x₀)\n斜截式：y=kx+b\n两点式：(y-y₁)/(y₂-y₁)=(x-x₁)/(x₂-x₁)\n截距式：x/a+y/b=1\n一般式：Ax+By+C=0"
      },
      {
        "type": "h3",
        "text": "2. 两条直线的位置关系"
      },
      {
        "type": "ul",
        "items": [
          "平行：k₁=k₂且b₁≠b₂（或A₁B₂=A₂B₁且A₁C₂≠A₂C₁）",
          "垂直：k₁·k₂=-1（或A₁A₂+B₁B₂=0）"
        ]
      },
      {
        "type": "h3",
        "text": "3. 距离公式"
      },
      {
        "type": "formula",
        "text": "两点间距离：|AB|=√[(x₂-x₁)²+(y₂-y₁)²]\n点到直线距离：d=|Ax₀+By₀+C|/√(A²+B²)\n平行线间距离：d=|C₁-C₂|/√(A²+B²)"
      },
      {
        "type": "h2",
        "text": "二、圆的方程"
      },
      {
        "type": "formula",
        "text": "标准方程：(x-a)²+(y-b)²=r²\n一般方程：x²+y²+Dx+Ey+F=0\n圆心：(-D/2,-E/2)\n半径：r=√(D²+E²-4F)/2"
      },
      {
        "type": "h2",
        "text": "三、椭圆"
      },
      {
        "type": "p",
        "text": "定义：平面内到两个定点F₁、F₂的距离之和等于常数(>|F₁F₂|)的点的轨迹。"
      },
      {
        "type": "formula",
        "text": "标准方程：x²/a²+y²/b²=1(a>b>0)\n焦点：F₁(-c,0),F₂(c,0)\nc²=a²-b²\n离心率：e=c/a(0<e<1)\n准线：x=±a²/c"
      },
      {
        "type": "h2",
        "text": "四、双曲线"
      },
      {
        "type": "p",
        "text": "定义：平面内到两个定点F₁、F₂的距离之差的绝对值为常数(<|F₁F₂|)的点的轨迹。"
      },
      {
        "type": "formula",
        "text": "标准方程：x²/a²-y²/b²=1(a>0,b>0)\n焦点：F₁(-c,0),F₂(c,0)\nc²=a²+b²\n离心率：e=c/a(e>1)\n渐近线：y=±(b/a)x"
      },
      {
        "type": "h2",
        "text": "五、抛物线"
      },
      {
        "type": "p",
        "text": "定义：平面内到定点F和定直线l(F∉l)的距离相等的点的轨迹。"
      },
      {
        "type": "formula",
        "text": "标准方程：y²=2px(p>0)\n焦点：F(p/2,0)\n准线：x=-p/2\n离心率：e=1"
      }
    ]
  },
  "gailv": {
    "title": "概率统计",
    "content": [
      {
        "type": "h2",
        "text": "一、计数原理"
      },
      {
        "type": "h3",
        "text": "1. 分类加法计数原理"
      },
      {
        "type": "p",
        "text": "完成一件事有n类方案，第i类方案有mᵢ种方法，则总方法数为：N=m₁+m₂+...+mₙ"
      },
      {
        "type": "h3",
        "text": "2. 分步乘法计数原理"
      },
      {
        "type": "p",
        "text": "完成一件事需要n个步骤，第i个步骤有mᵢ种方法，则总方法数为：N=m₁×m₂×...×mₙ"
      },
      {
        "type": "h3",
        "text": "3. 排列"
      },
      {
        "type": "formula",
        "text": "Aₙᵐ=n(n-1)...(n-m+1)=n!/(n-m)!"
      },
      {
        "type": "h3",
        "text": "4. 组合"
      },
      {
        "type": "formula",
        "text": "Cₙᵐ=Aₙᵐ/m!=n!/[m!(n-m)!]\n性质：Cₙᵐ=Cₙⁿ⁻ᵐ，Cₙᵐ+Cₙᵐ⁻¹=C_{n+1}ᵐ"
      },
      {
        "type": "h2",
        "text": "二、概率"
      },
      {
        "type": "h3",
        "text": "1. 古典概型"
      },
      {
        "type": "p",
        "text": "特点：①有限个基本事件 ②每个基本事件等可能"
      },
      {
        "type": "formula",
        "text": "P(A)=m/n（m为A包含的基本事件数，n为总基本事件数）"
      },
      {
        "type": "h3",
        "text": "2. 条件概率"
      },
      {
        "type": "formula",
        "text": "P(B|A)=P(AB)/P(A)(P(A)>0)"
      },
      {
        "type": "h3",
        "text": "3. 相互独立事件"
      },
      {
        "type": "p",
        "text": "若P(AB)=P(A)P(B)，则A、B相互独立。对于相互独立事件同时发生的概率为各概率之积。"
      },
      {
        "type": "h2",
        "text": "三、随机变量的分布与数字特征"
      },
      {
        "type": "h3",
        "text": "1. 期望（均值）"
      },
      {
        "type": "formula",
        "text": "E(X)=Σxᵢ·pᵢ"
      },
      {
        "type": "h3",
        "text": "2. 方差"
      },
      {
        "type": "formula",
        "text": "D(X)=E(X²)-[E(X)]²=Σ(xᵢ-E(X))²·pᵢ"
      },
      {
        "type": "h3",
        "text": "3. 二项分布"
      },
      {
        "type": "formula",
        "text": "X~B(n,p)，则P(X=k)=Cₙᵏpᵏ(1-p)ⁿ⁻ᵏ\nE(X)=np，D(X)=np(1-p)"
      },
      {
        "type": "h2",
        "text": "四、统计"
      },
      {
        "type": "ul",
        "items": [
          "众数：出现次数最多的数",
          "中位数：排序后中间的数（偶数个时取中间两数的平均数）",
          "平均数：x̄=(x₁+x₂+...+xₙ)/n",
          "方差：s²=[(x₁-x̄)²+...+(xₙ-x̄)²]/n",
          "标准差：s=√s²"
        ]
      },
      {
        "type": "p",
        "text": "正态分布：X~N(μ,σ²)，概率密度曲线关于x=μ对称。"
      }
    ]
  },
  "daoshu": {
    "title": "导数",
    "content": [
      {
        "type": "h2",
        "text": "一、导数的概念"
      },
      {
        "type": "p",
        "text": "函数y=f(x)在点x₀处的导数f'(x₀)表示函数在该点的瞬时变化率，即曲线y=f(x)在点(x₀,f(x₀))处的切线斜率。"
      },
      {
        "type": "formula",
        "text": "f'(x₀)=lim_{Δx→0}[f(x₀+Δx)-f(x₀)]/Δx"
      },
      {
        "type": "h2",
        "text": "二、基本初等函数的导数公式"
      },
      {
        "type": "formula",
        "text": "C'=0（C为常数）\n(xⁿ)'=nxⁿ⁻¹\n(sin x)'=cos x\n(cos x)'=-sin x\n(eˣ)'=eˣ\n(aˣ)'=aˣln a\n(ln x)'=1/x\n(logₐx)'=1/(xln a)"
      },
      {
        "type": "h2",
        "text": "三、导数的四则运算法则"
      },
      {
        "type": "formula",
        "text": "(u±v)'=u'±v'\n(uv)'=u'v+uv'\n(u/v)'=(u'v-uv')/v²(v≠0)\n复合函数链式法则：[g(f(x))]'=g'(f(x))·f'(x)"
      },
      {
        "type": "h2",
        "text": "四、导数的应用"
      },
      {
        "type": "h3",
        "text": "1. 判断函数单调性"
      },
      {
        "type": "p",
        "text": "在区间(a,b)内，若f'(x)>0，则f(x)单调递增；若f'(x)<0，则f(x)单调递减。"
      },
      {
        "type": "h3",
        "text": "2. 求极值"
      },
      {
        "type": "p",
        "text": "求极值的步骤：①求f'(x) ②解f'(x)=0 ③判断f'(x)在驻点左右两侧的符号（或利用二阶导数）"
      },
      {
        "type": "h3",
        "text": "3. 求最值"
      },
      {
        "type": "p",
        "text": "求闭区间[a,b]上最值的方法：①求驻点 ②比较所有驻点和端点处的函数值"
      },
      {
        "type": "example",
        "text": "例：求f(x)=x³-3x+1在[-2,2]上的最值。\n解：f'(x)=3x²-3=0⇒x=±1\nf(-2)=-1，f(-1)=3，f(1)=-1，f(2)=3\n最大值3（x=-1或2），最小值-1（x=-2或1）"
      }
    ]
  }
};


function renderTheory(id) {
  var container = document.getElementById('theoryContent');
  var data = theoryData[id];
  if (!data) {
    container.innerHTML = '<div class="empty-state"><p>内容加载中...</p></div>';
    return;
  }

  // Update nav highlight
  document.querySelectorAll('#theoryNav a').forEach(function(a) { a.classList.remove('active'); });
  var navLink = document.querySelector('#theoryNav a[href="#' + id + '"]');
  if (navLink) navLink.classList.add('active');

  var html = '<div class="theory-content">';
  data.content.forEach(function(item) {
    switch(item.type) {
      case 'h2': html += '<h2>' + item.text + '</h2>'; break;
      case 'h3': html += '<h3>' + item.text + '</h3>'; break;
      case 'p': html += '<p>' + item.text + '</p>'; break;
      case 'formula':
        html += '<div class="formula-box">' + item.text.replace(/\\n/g, '<br>') + '</div>';
        break;
      case 'example':
        html += '<div class="example-box"><strong>📝 例题</strong><br>' + item.text.replace(/\\n/g, '<br>') + '</div>';
        break;
      case 'note':
        html += '<div class="note-box"><strong>💡 注意</strong><br>' + item.text + '</div>';
        break;
      case 'ul':
        html += '<ul>';
        item.items.forEach(function(li) { html += '<li>' + li + '</li>'; });
        html += '</ul>';
        break;
      case 'ol':
        html += '<ol>';
        item.items.forEach(function(li) { html += '<li>' + li + '</li>'; });
        html += '</ol>';
        break;
    }
  });
  html += '</div>';
  html += '<div style="text-align:center;margin-top:2rem;"><a href="../index.html" class="back-link">← 返回首页</a></div>';
  container.innerHTML = html;
  setTimeout(function() {
    if (typeof renderMathInElement === "function") {
      try { renderMathInElement(container, {delimiters:[{left:"$",right:"$",display:true},{left:"$",right:"$",display:false}]}); } catch(e) {}
    }
  }, 50);
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(function() {
    if (typeof katex !== "undefined") {
      try {
        var els = container.querySelectorAll(".formula-box, p, li");
        for (var i = 0; i < els.length; i++) {
          var h = els[i].innerHTML;
          if (h.indexOf("$") < 0) continue;
          var r = h.replace(/\$\$([\s\S]+?)\$\$/g, function(m, c) {
            var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            try { return katex.renderToString(math, {displayMode: true, throwOnError: false}); } catch(e) { return m; }
          });
          r = r.replace(/\$([^$]+?)\$/g, function(m, c) {
            var math = c.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            try { return katex.renderToString(math, {displayMode: false, throwOnError: false}); } catch(e) { return m; }
          });
          els[i].innerHTML = r;
        }
      } catch(e) {}
    }
  }, 100);
}
// Default load first section
document.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '') || 'jihe';
  renderTheory(hash);
  window.addEventListener('hashchange', function() {
    var newHash = window.location.hash.replace('#', '') || 'jihe';
    renderTheory(newHash);
  });
});
