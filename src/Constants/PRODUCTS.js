const PRODUCTS = [
    {
        name: 'блинчики с мясом',
        image: '../../images/pancakes.png',
        price: 50.50,
        category: ['еда'],
        discount: 44.50,
        description: 'Г/Ц Блинчики с мясом вес, Россия',
        rating: 2,
        id: 11111,
        brand: 'Вокзал',
        country: 'Россия',
        weight: 150,
        comment: [
            {
                rate: 2,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молоко Простоквашино',
        image: '../../images/milk.png',
        price: 50.50,
        category: ['еда', 'молоко'],
        discount: 44.50,
        description: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное',
        rating: 3.5,
        id: 11112,
        brand: 'Простоквашино',
        country: 'Россия',
        weight: 1000,
        comment: [
            {
                rate: 5,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 4,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'колбаса Мясная История Сальчичон',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'мясо', 'колбаса'],
        discount: 44.50,
        description: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан',
        rating: 5,
        id: 11113,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 5,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 4,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'сосиски Мясная История Сальчичон',
        image: '../../images/sausage2.png',
        price: 50.50,
        category: ['еда', 'мясо', 'колбаса'],
        discount: 44.50,
        description: 'Сосиски сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан',
        rating: 3,
        id: 11114,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 3,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 3,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайн',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'мясо', 'птица', 'колбаса'],
        discount: '',
        description: 'Комбайн сырокопченый МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан',
        rating: 3.7,
        id: 11114,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'хлеб',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'хлеб'],
        discount: '',
        description: 'Вкуснейший хлеб из района Альпийский гор',
        rating: 3.8,
        id: 11115,
        brand: 'НеМясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'багет',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'хлеб'],
        discount: '',
        description: 'Багет из маленькой пекарни в маленькой деревне Франции',
        rating: 3.9,
        id: 11116,
        brand: 'НеМясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'яблоко',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'фрукты'],
        discount: '',
        description: 'Яблоко, которое полезнее чем золотое яблоко из майнкрафта',
        rating: 1.2,
        id: 11117,
        brand: 'Мясная история',
        country: 'Беларусь',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'мандарин',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'овощи'],
        discount: '',
        description: 'Вкус нового года',
        rating: 5,
        id: 11118,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200
    },
    {
        name: 'мороженный тюлень',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'замороженные продукты'],
        discount: '',
        description: 'Такого вы еще не пробовали',
        rating: 5,
        id: 11119,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'мороженный замороженный',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'замороженные продукты'],
        discount: '',
        description: 'Описание есть, но его нет(',
        rating: 5,
        id: 11120,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'coca-cola',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'напитки'],
        discount: '',
        description: 'Вкус язвы желудка',
        rating: 5,
        id: 11121,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'fanta',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'напитки'],
        discount: '',
        description: 'Тоже вкус язвы желудка, но придумали фашисты',
        rating: 1,
        id: 11122,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'торт "React"',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'кондитерские изделия'],
        discount: '',
        description: 'Сливочный вкус хуков',
        rating: 4,
        id: 11123,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'конфеты',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'кондитерские изделия'],
        discount: '',
        description: 'Конфеты, которые не имеют названия',
        rating: 3,
        id: 11124,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'чай',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'чай', 'кофе'],
        discount: '',
        description: 'чай',
        rating: 5,
        id: 11125,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'кофе',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'чай', 'кофе'],
        discount: '',
        description: 'кофе',
        rating: 4,
        id: 11126,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'макароны "Итальяно"',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'бакалея'],
        discount: 44.50,
        description: 'Итальянские макарошки',
        rating: 2,
        id: 11127,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'макароны "Неитальяно"',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'бакалея'],
        discount: '',
        description: 'Не итальянские макарошки',
        rating: 3,
        id: 11128,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то здоровое',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'здоровое питание'],
        discount: '',
        description: 'невкусное здоровое',
        rating: 5,
        id: 11129,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то здоровое, но вкуснее',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'здоровое питание'],
        discount: '',
        description: 'вкусное здоровое',
        rating: 3,
        id: 11130,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'корм для животных всех видов',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'зоотовары'],
        discount: '',
        description: 'ест любая дичь',
        rating: 4,
        id: 11131,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'наполнитель',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['зоотовары'],
        discount: '',
        description: 'Наполнитель',
        rating: 3,
        id: 11132,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'нервы взрослого человека',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'детское питание'],
        discount: 44.50,
        description: 'тончайшие нервы молодых родителей',
        rating: 5,
        id: 11133,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'детское пюре',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'детское питание'],
        discount: '',
        description: 'пюрешка, но без котлеток',
        rating: 4,
        id: 11134,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'йогурт',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['еда', 'молоко', 'сыр', 'яйцо'],
        discount: '',
        description: 'йогурт',
        rating: 3,
        id: 11135,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'ручка',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['непродовольственные товары'],
        discount: '',
        description: 'ручка, чтобы выдумывать описания и отоброжать их на бумаге, но можно и не на бумаге',
        rating: 4,
        id: 11136,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'карандаш',
        image: '../../images/sausage1.png',
        price: 50.50,
        category: ['непродовольственные товары'],
        discount: '',
        description: 'Карандаш, чтобы съесть грифель и не пойти в школу',
        rating: 5,
        id: 11137,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11138,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11139,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11140,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11141,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11142,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11143,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11144,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11145,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11146,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11147,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11148,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11149,
        brand: '../../Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11150,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11151,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока1',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11152,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой1',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11153,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)1',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11154,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота1',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11155,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI1',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11156,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана1',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11157,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость2',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11158,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр2',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11159,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11160,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11161,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока2',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11162,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой2',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11163,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11164,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11165,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11166,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана2',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11167,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость3',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11168,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр3',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11169,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11170,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11171,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока3',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11172,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой3',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11173,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11174,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11175,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11176,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана3',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11177,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость4',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11178,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр4',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11179,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11180,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11181,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока4',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11182,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой4',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11183,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11184,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11185,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11186,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана4',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11187,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'молокосодержащая жидкость5',
        image: '../../images/sausage1.png',
        price: 179.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'На вкус как молоко',
        rating: 1,
        id: 11188,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащий сыр5',
        image: '../../images/sausage1.png',
        price: 123.50,
        category: ['сыр', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сыр)',
        rating: 4,
        id: 11189,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11190,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11191,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'элитное пойло из молока5',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Не, ну вы видели эту цену?',
        rating: 5,
        id: 11192,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'какая-то молочка с очень большой скидкой5',
        image: '../../images/sausage1.png',
        price: 999.50,
        category: ['молоко', 'еда'],
        discount: 10,
        description: 'Не знаю что со сроком годности, но скидка огромная',
        rating: 5,
        id: 11193,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'что-то белое ;)5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Ничего такого, просто молоко',
        rating: 4,
        id: 11194,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'Дезоксирибонуклеиновая кислота5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Со вкусом школьных знаний по биологии',
        rating: 4,
        id: 11195,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'AEZAKMI5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Полиция на вас не обращает внимание',
        rating: 4,
        id: 11196,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },
    {
        name: 'комбайносодержащая сметана5',
        image: '../../images/sausage1.png',
        price: 140.50,
        category: ['молоко', 'еда'],
        discount: '',
        description: 'Тут такое бывает (сметана)',
        rating: 4,
        id: 11197,
        brand: 'Мясная история',
        country: 'Россия',
        weight: 200,
        comment: [
            {
                rate: 4,
                description: 'Не вкусно',
                date: '12.12.2022',
                userName: 'Иван',
                userImage: '../../images/user.png'
            },
            {
                rate: 2,
                description: 'олырвыффао',
                date: '30.01.2023',
                userName: 'Мария',
                userImage: '../../images/user.png'
            },
        ]
    },



];

export default PRODUCTS;