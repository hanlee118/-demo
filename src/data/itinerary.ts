export interface Spot {
  name: string;
  description: string;
  time?: string;
  image?: string;
  coordinates: [number, number];
  type: 'attraction' | 'accommodation' | 'food' | 'city';
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  summary: string;
  spots: Spot[];
  food?: string[];
  tips?: string[];
}

export const planA: DayPlan[] = [
  {
    day: 1,
    date: '4月30日 (晚)',
    title: '披星戴月，直奔闽东',
    summary: '从杭州出发，直抵福建福鼎。建议晚9点出发，避开拥堵高峰。',
    spots: [
      {
        name: '杭州 (出发点)',
        description: '建议晚上出发，避开5月1日上午的出城高峰。',
        coordinates: [30.2741, 120.1551],
        type: 'city',
      },
      {
        name: '福鼎市区',
        description: '第一站落脚点，这里是闽东门户，更是著名的美食之都。',
        coordinates: [27.3242, 120.2161],
        type: 'accommodation',
        image: 'https://images.unsplash.com/photo-1514565131-0ce0801e528a?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    tips: ['预计驾驶5-6小时，请注意夜间行车安全', '出发前检查车辆状况']
  },
  {
    day: 2,
    date: '5月1日',
    title: '海上仙都，古刹禅心',
    summary: '核心行程：避开人流游览太姥山，并深度体验平兴寺的律宗禅意。',
    spots: [
      {
        name: '太姥山',
        description: '“海上仙都”，世界地质公园。怪石嶙峋，云雾缭绕。',
        coordinates: [27.1044, 120.2036],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000',
        time: '上午'
      },
      {
        name: '平兴寺',
        description: '汉地律宗道场，远离喧嚣。僧影绰绰，梵音低吟。',
        coordinates: [27.0864, 120.2186],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1542642832-1b151329007f?auto=format&fit=crop&q=80&w=1000',
        time: '下午'
      }
    ],
    food: ['福鼎肉片', '蜜汁鸡翅', '槟榔芋泥'],
    tips: ['寺院内保持安静，尊重规约', '节假日太姥山人多，建议早起']
  },
  {
    day: 3,
    date: '5月2日',
    title: '古榕树影，滩涂落日',
    summary: '从福鼎转战霞浦，在这里追寻光影。',
    spots: [
      {
        name: '杨家溪',
        description: '古榕树群，清晨阳光穿过枝叶，极具人文气息。',
        coordinates: [26.9634, 120.0866],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
        time: '上午'
      },
      {
        name: '东壁村',
        description: '绝美日落观赏点，金色的滩涂与错落的屋舍。',
        coordinates: [26.9034, 119.9866],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
        time: '傍晚'
      }
    ],
    food: ['霞浦海鲜', '闽南糊'],
    tips: ['东壁村民宿需提前一周以上预订']
  },
  {
    day: 4,
    date: '5月3日',
    title: '光影追逐，沿海公路',
    summary: '霞浦深度游，在最美滩涂与沿海公路间穿梭。',
    spots: [
      {
        name: '北岐滩涂',
        description: '中国最美滩涂，渔网在晨光中交织出梦幻纹路。',
        coordinates: [26.8959, 120.0433],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1000',
        time: '凌晨/清晨'
      },
      {
        name: '东海1号观光道',
        description: '最美沿海公路，海边悬崖与纯净海蓝，绝佳自驾体验。',
        coordinates: [26.85, 119.95],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&w=1000',
        time: '下午'
      }
    ],
    food: ['珍珠鲍', '剑蛏'],
    tips: ['拍摄滩涂受潮汐影响，请提前关注潮汐表']
  },
  {
    day: 5,
    date: '5月4日',
    title: '满载回忆，返回杭州',
    summary: '自由休整，带上当地特产海鲜干货，午后返程。',
    spots: [
      {
        name: '霞浦县城',
        description: '当地海鲜市场采购，带走一份山海的馈赠。',
        coordinates: [26.8859, 120.0033],
        type: 'city',
        time: '上午'
      },
      {
        name: '杭州 (返回)',
        description: '带着满满的光影回忆，踏上归途。',
        coordinates: [30.2741, 120.1551],
        type: 'city',
        time: '晚间'
      }
    ]
  }
];

export const planB: DayPlan[] = [
  {
    day: 1,
    date: '4月30日 (晚)',
    title: '奔赴闽东门户',
    summary: '杭州出发直抵福鼎，宿福鼎。',
    spots: [
      {
        name: '福鼎市区',
        description: '夜抵福鼎，看桐江桥影。',
        coordinates: [27.3242, 120.2161],
        type: 'accommodation',
        image: 'https://images.unsplash.com/photo-1514565131-0ce0801e528a?auto=format&fit=crop&q=80&w=1000'
      }
    ]
  },
  {
    day: 2,
    date: '5月1日',
    title: '奇石古刹之旅',
    summary: '深度游览太姥山与平兴寺。',
    spots: [
      {
        name: '太姥山',
        description: '海上仙都，世界奇观。',
        coordinates: [27.1044, 120.2036],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: '平兴寺',
        description: '律宗道场，佛缘深厚。',
        coordinates: [27.0864, 120.2186],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1542642832-1b151329007f?auto=format&fit=crop&q=80&w=1000'
      }
    ]
  },
  {
    day: 3,
    date: '5月2日',
    title: '海上草原：嵛山岛',
    summary: '从福鼎乘船前往嵛山岛，体验岛上的“万亩草甸”和“大小天湖”。',
    spots: [
      {
        name: '嵛山岛',
        description: '中国最美十大海岛之一，高山湖泊，草原壮阔。',
        coordinates: [26.9234, 120.3566],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000'
      }
    ],
    tips: ['需提前查看船期', '岛上风大，注意携带外套']
  },
  {
    day: 4,
    date: '5月3日',
    title: '霞浦经典光影',
    summary: '回程经杨家溪看古榕，傍晚至霞浦看绝美日落。',
    spots: [
      {
        name: '杨家溪',
        description: '“海国桃源”，看光影穿透古榕。',
        coordinates: [26.9634, 120.0866],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'
      },
      {
        name: '东壁村',
        description: '日落时分，滩涂被染成金色。',
        coordinates: [26.9034, 119.9866],
        type: 'attraction',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000'
      }
    ]
  },
  {
    day: 5,
    date: '5月4日',
    title: '返程杭州',
    summary: '从霞浦或福鼎返程杭州。',
    spots: [
      {
        name: '杭州',
        description: '旅程结束。',
        coordinates: [30.2741, 120.1551],
        type: 'city'
      }
    ]
  }
];
