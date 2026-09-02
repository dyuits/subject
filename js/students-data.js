// 학생 데이터 - students.csv 기반
// Firebase의 students 명단을 불러오면 이 기본 명단을 교체합니다.
// 네트워크 장애 시에는 배포 시점의 명단을 예비값으로 사용합니다.
let STUDENTS_DATA = {
  "1-7-1": {
    "id": "1-7-1",
    "grade": 1,
    "class_num": 7,
    "student_num": 1,
    "name": "강지원",
    "birth": "20100210",
    "department": "금융비즈니스과"
  },
  "1-7-2": {
    "id": "1-7-2",
    "grade": 1,
    "class_num": 7,
    "student_num": 2,
    "name": "고하은",
    "birth": "20100113",
    "department": "금융비즈니스과"
  },
  "1-7-3": {
    "id": "1-7-3",
    "grade": 1,
    "class_num": 7,
    "student_num": 3,
    "name": "김서연",
    "birth": "20100824",
    "department": "금융비즈니스과"
  },
  "1-7-4": {
    "id": "1-7-4",
    "grade": 1,
    "class_num": 7,
    "student_num": 4,
    "name": "김채원",
    "birth": "20100517",
    "department": "금융비즈니스과"
  },
  "1-7-5": {
    "id": "1-7-5",
    "grade": 1,
    "class_num": 7,
    "student_num": 5,
    "name": "문하늘",
    "birth": "20101005",
    "department": "금융비즈니스과"
  },
  "1-7-6": {
    "id": "1-7-6",
    "grade": 1,
    "class_num": 7,
    "student_num": 6,
    "name": "박하빈",
    "birth": "20101213",
    "department": "금융비즈니스과"
  },
  "1-7-7": {
    "id": "1-7-7",
    "grade": 1,
    "class_num": 7,
    "student_num": 7,
    "name": "양소영",
    "birth": "20100626",
    "department": "금융비즈니스과"
  },
  "1-7-8": {
    "id": "1-7-8",
    "grade": 1,
    "class_num": 7,
    "student_num": 8,
    "name": "오가은",
    "birth": "20100709",
    "department": "금융비즈니스과"
  },
  "1-7-9": {
    "id": "1-7-9",
    "grade": 1,
    "class_num": 7,
    "student_num": 9,
    "name": "정서윤",
    "birth": "20100110",
    "department": "금융비즈니스과"
  },
  "1-7-10": {
    "id": "1-7-10",
    "grade": 1,
    "class_num": 7,
    "student_num": 10,
    "name": "강윤석",
    "birth": "20101031",
    "department": "금융비즈니스과"
  },
  "1-7-11": {
    "id": "1-7-11",
    "grade": 1,
    "class_num": 7,
    "student_num": 11,
    "name": "강준우",
    "birth": "20100305",
    "department": "금융비즈니스과"
  },
  "1-7-12": {
    "id": "1-7-12",
    "grade": 1,
    "class_num": 7,
    "student_num": 12,
    "name": "김승현",
    "birth": "20100315",
    "department": "금융비즈니스과"
  },
  "1-7-13": {
    "id": "1-7-13",
    "grade": 1,
    "class_num": 7,
    "student_num": 13,
    "name": "김하율",
    "birth": "20101019",
    "department": "금융비즈니스과"
  },
  "1-7-14": {
    "id": "1-7-14",
    "grade": 1,
    "class_num": 7,
    "student_num": 14,
    "name": "문유환",
    "birth": "20100220",
    "department": "금융비즈니스과"
  },
  "1-7-15": {
    "id": "1-7-15",
    "grade": 1,
    "class_num": 7,
    "student_num": 15,
    "name": "서진우",
    "birth": "20100108",
    "department": "금융비즈니스과"
  },
  "1-7-16": {
    "id": "1-7-16",
    "grade": 1,
    "class_num": 7,
    "student_num": 16,
    "name": "안유수",
    "birth": "20100823",
    "department": "금융비즈니스과"
  },
  "1-7-17": {
    "id": "1-7-17",
    "grade": 1,
    "class_num": 7,
    "student_num": 17,
    "name": "이예준",
    "birth": "20101212",
    "department": "금융비즈니스과"
  },
  "1-7-18": {
    "id": "1-7-18",
    "grade": 1,
    "class_num": 7,
    "student_num": 18,
    "name": "이준우",
    "birth": "20101116",
    "department": "금융비즈니스과"
  },
  "1-7-19": {
    "id": "1-7-19",
    "grade": 1,
    "class_num": 7,
    "student_num": 19,
    "name": "이지완",
    "birth": "20100103",
    "department": "금융비즈니스과"
  },
  "1-7-20": {
    "id": "1-7-20",
    "grade": 1,
    "class_num": 7,
    "student_num": 20,
    "name": "정승주",
    "birth": "20100120",
    "department": "금융비즈니스과"
  },
  "1-7-21": {
    "id": "1-7-21",
    "grade": 1,
    "class_num": 7,
    "student_num": 21,
    "name": "정지우",
    "birth": "20100910",
    "department": "금융비즈니스과"
  },
  "1-7-22": {
    "id": "1-7-22",
    "grade": 1,
    "class_num": 7,
    "student_num": 22,
    "name": "정찬영",
    "birth": "20100425",
    "department": "금융비즈니스과"
  },
  "1-7-23": {
    "id": "1-7-23",
    "grade": 1,
    "class_num": 7,
    "student_num": 23,
    "name": "채종훈",
    "birth": "20100504",
    "department": "금융비즈니스과"
  },
  "1-7-24": {
    "id": "1-7-24",
    "grade": 1,
    "class_num": 7,
    "student_num": 24,
    "name": "최승민",
    "birth": "20100418",
    "department": "금융비즈니스과"
  },
  "1-7-25": {
    "id": "1-7-25",
    "grade": 1,
    "class_num": 7,
    "student_num": 25,
    "name": "한지우",
    "birth": "20101201",
    "department": "금융비즈니스과"
  },
  "1-8-1": {
    "id": "1-8-1",
    "grade": 1,
    "class_num": 8,
    "student_num": 1,
    "name": "곽한별",
    "birth": "20100307",
    "department": "금융비즈니스과"
  },
  "1-8-2": {
    "id": "1-8-2",
    "grade": 1,
    "class_num": 8,
    "student_num": 2,
    "name": "김서현",
    "birth": "20100416",
    "department": "금융비즈니스과"
  },
  "1-8-3": {
    "id": "1-8-3",
    "grade": 1,
    "class_num": 8,
    "student_num": 3,
    "name": "김채현",
    "birth": "20100922",
    "department": "금융비즈니스과"
  },
  "1-8-4": {
    "id": "1-8-4",
    "grade": 1,
    "class_num": 8,
    "student_num": 4,
    "name": "박은지",
    "birth": "20100813",
    "department": "금융비즈니스과"
  },
  "1-8-5": {
    "id": "1-8-5",
    "grade": 1,
    "class_num": 8,
    "student_num": 5,
    "name": "안서진",
    "birth": "20100902",
    "department": "금융비즈니스과"
  },
  "1-8-6": {
    "id": "1-8-6",
    "grade": 1,
    "class_num": 8,
    "student_num": 6,
    "name": "양예슬",
    "birth": "20100918",
    "department": "금융비즈니스과"
  },
  "1-8-7": {
    "id": "1-8-7",
    "grade": 1,
    "class_num": 8,
    "student_num": 7,
    "name": "오소은",
    "birth": "20100410",
    "department": "금융비즈니스과"
  },
  "1-8-8": {
    "id": "1-8-8",
    "grade": 1,
    "class_num": 8,
    "student_num": 8,
    "name": "이유진",
    "birth": "20100204",
    "department": "금융비즈니스과"
  },
  "1-8-9": {
    "id": "1-8-9",
    "grade": 1,
    "class_num": 8,
    "student_num": 9,
    "name": "강지운",
    "birth": "20100702",
    "department": "금융비즈니스과"
  },
  "1-8-10": {
    "id": "1-8-10",
    "grade": 1,
    "class_num": 8,
    "student_num": 10,
    "name": "고민성",
    "birth": "20101214",
    "department": "금융비즈니스과"
  },
  "1-8-11": {
    "id": "1-8-11",
    "grade": 1,
    "class_num": 8,
    "student_num": 11,
    "name": "고상운",
    "birth": "20100802",
    "department": "금융비즈니스과"
  },
  "1-8-12": {
    "id": "1-8-12",
    "grade": 1,
    "class_num": 8,
    "student_num": 12,
    "name": "김강은",
    "birth": "20100906",
    "department": "금융비즈니스과"
  },
  "1-8-13": {
    "id": "1-8-13",
    "grade": 1,
    "class_num": 8,
    "student_num": 13,
    "name": "김규민",
    "birth": "20100408",
    "department": "금융비즈니스과"
  },
  "1-8-14": {
    "id": "1-8-14",
    "grade": 1,
    "class_num": 8,
    "student_num": 14,
    "name": "김효우",
    "birth": "20100226",
    "department": "금융비즈니스과"
  },
  "1-8-15": {
    "id": "1-8-15",
    "grade": 1,
    "class_num": 8,
    "student_num": 15,
    "name": "김휘서",
    "birth": "20100120",
    "department": "금융비즈니스과"
  },
  "1-8-16": {
    "id": "1-8-16",
    "grade": 1,
    "class_num": 8,
    "student_num": 16,
    "name": "송원혁",
    "birth": "20100412",
    "department": "금융비즈니스과"
  },
  "1-8-17": {
    "id": "1-8-17",
    "grade": 1,
    "class_num": 8,
    "student_num": 17,
    "name": "양지후",
    "birth": "20101016",
    "department": "금융비즈니스과"
  },
  "1-8-18": {
    "id": "1-8-18",
    "grade": 1,
    "class_num": 8,
    "student_num": 18,
    "name": "우예준",
    "birth": "20101210",
    "department": "금융비즈니스과"
  },
  "1-8-19": {
    "id": "1-8-19",
    "grade": 1,
    "class_num": 8,
    "student_num": 19,
    "name": "이승원",
    "birth": "20101006",
    "department": "금융비즈니스과"
  },
  "1-8-20": {
    "id": "1-8-20",
    "grade": 1,
    "class_num": 8,
    "student_num": 20,
    "name": "장한울",
    "birth": "20100425",
    "department": "금융비즈니스과"
  },
  "1-8-21": {
    "id": "1-8-21",
    "grade": 1,
    "class_num": 8,
    "student_num": 21,
    "name": "최영조",
    "birth": "20100729",
    "department": "금융비즈니스과"
  },
  "1-8-22": {
    "id": "1-8-22",
    "grade": 1,
    "class_num": 8,
    "student_num": 22,
    "name": "한신비",
    "birth": "20100504",
    "department": "금융비즈니스과"
  },
  "1-8-23": {
    "id": "1-8-23",
    "grade": 1,
    "class_num": 8,
    "student_num": 23,
    "name": "허재범",
    "birth": "20100313",
    "department": "금융비즈니스과"
  },
  "1-8-24": {
    "id": "1-8-24",
    "grade": 1,
    "class_num": 8,
    "student_num": 24,
    "name": "허현",
    "birth": "20100309",
    "department": "금융비즈니스과"
  },
  "1-8-25": {
    "id": "1-8-25",
    "grade": 1,
    "class_num": 8,
    "student_num": 25,
    "name": "황진호",
    "birth": "20101113",
    "department": "금융비즈니스과"
  },
  "1-9-1": {
    "id": "1-9-1",
    "grade": 1,
    "class_num": 9,
    "student_num": 1,
    "name": "강나윤",
    "birth": "20100903",
    "department": "문화콘텐츠과"
  },
  "1-9-2": {
    "id": "1-9-2",
    "grade": 1,
    "class_num": 9,
    "student_num": 2,
    "name": "강효민",
    "birth": "20101008",
    "department": "문화콘텐츠과"
  },
  "1-9-3": {
    "id": "1-9-3",
    "grade": 1,
    "class_num": 9,
    "student_num": 3,
    "name": "강희조",
    "birth": "20101028",
    "department": "문화콘텐츠과"
  },
  "1-9-4": {
    "id": "1-9-4",
    "grade": 1,
    "class_num": 9,
    "student_num": 4,
    "name": "김보민",
    "birth": "20100908",
    "department": "문화콘텐츠과"
  },
  "1-9-5": {
    "id": "1-9-5",
    "grade": 1,
    "class_num": 9,
    "student_num": 5,
    "name": "김연아",
    "birth": "20100327",
    "department": "문화콘텐츠과"
  },
  "1-9-6": {
    "id": "1-9-6",
    "grade": 1,
    "class_num": 9,
    "student_num": 6,
    "name": "김유진",
    "birth": "20100313",
    "department": "문화콘텐츠과"
  },
  "1-9-7": {
    "id": "1-9-7",
    "grade": 1,
    "class_num": 9,
    "student_num": 7,
    "name": "김윤지",
    "birth": "20100120",
    "department": "문화콘텐츠과"
  },
  "1-9-8": {
    "id": "1-9-8",
    "grade": 1,
    "class_num": 9,
    "student_num": 8,
    "name": "손시현",
    "birth": "20100202",
    "department": "문화콘텐츠과"
  },
  "1-9-9": {
    "id": "1-9-9",
    "grade": 1,
    "class_num": 9,
    "student_num": 9,
    "name": "신지우",
    "birth": "20100106",
    "department": "문화콘텐츠과"
  },
  "1-9-10": {
    "id": "1-9-10",
    "grade": 1,
    "class_num": 9,
    "student_num": 10,
    "name": "양소은",
    "birth": "20100405",
    "department": "문화콘텐츠과"
  },
  "1-9-11": {
    "id": "1-9-11",
    "grade": 1,
    "class_num": 9,
    "student_num": 11,
    "name": "오지혜",
    "birth": "20110112",
    "department": "문화콘텐츠과"
  },
  "1-9-12": {
    "id": "1-9-12",
    "grade": 1,
    "class_num": 9,
    "student_num": 12,
    "name": "윤주혜",
    "birth": "20101125",
    "department": "문화콘텐츠과"
  },
  "1-9-13": {
    "id": "1-9-13",
    "grade": 1,
    "class_num": 9,
    "student_num": 13,
    "name": "이승현",
    "birth": "20100518",
    "department": "문화콘텐츠과"
  },
  "1-9-14": {
    "id": "1-9-14",
    "grade": 1,
    "class_num": 9,
    "student_num": 14,
    "name": "홍지영",
    "birth": "20100103",
    "department": "문화콘텐츠과"
  },
  "1-9-15": {
    "id": "1-9-15",
    "grade": 1,
    "class_num": 9,
    "student_num": 15,
    "name": "강범준",
    "birth": "20101209",
    "department": "문화콘텐츠과"
  },
  "1-9-16": {
    "id": "1-9-16",
    "grade": 1,
    "class_num": 9,
    "student_num": 16,
    "name": "강준성",
    "birth": "20100809",
    "department": "문화콘텐츠과"
  },
  "1-9-17": {
    "id": "1-9-17",
    "grade": 1,
    "class_num": 9,
    "student_num": 17,
    "name": "고성빈",
    "birth": "20100904",
    "department": "문화콘텐츠과"
  },
  "1-9-18": {
    "id": "1-9-18",
    "grade": 1,
    "class_num": 9,
    "student_num": 18,
    "name": "김남현",
    "birth": "20100116",
    "department": "문화콘텐츠과"
  },
  "1-9-19": {
    "id": "1-9-19",
    "grade": 1,
    "class_num": 9,
    "student_num": 19,
    "name": "김성은",
    "birth": "20100928",
    "department": "문화콘텐츠과"
  },
  "1-9-20": {
    "id": "1-9-20",
    "grade": 1,
    "class_num": 9,
    "student_num": 20,
    "name": "노민우",
    "birth": "20100819",
    "department": "문화콘텐츠과"
  },
  "1-9-21": {
    "id": "1-9-21",
    "grade": 1,
    "class_num": 9,
    "student_num": 21,
    "name": "이선우",
    "birth": "20100302",
    "department": "문화콘텐츠과"
  },
  "1-9-22": {
    "id": "1-9-22",
    "grade": 1,
    "class_num": 9,
    "student_num": 22,
    "name": "이예준",
    "birth": "20100802",
    "department": "문화콘텐츠과"
  },
  "1-9-23": {
    "id": "1-9-23",
    "grade": 1,
    "class_num": 9,
    "student_num": 23,
    "name": "이은성",
    "birth": "20101130",
    "department": "문화콘텐츠과"
  },
  "1-9-24": {
    "id": "1-9-24",
    "grade": 1,
    "class_num": 9,
    "student_num": 24,
    "name": "조율",
    "birth": "20101218",
    "department": "문화콘텐츠과"
  },
  "1-9-25": {
    "id": "1-9-25",
    "grade": 1,
    "class_num": 9,
    "student_num": 25,
    "name": "황지우",
    "birth": "20100721",
    "department": "문화콘텐츠과"
  },
  "1-10-1": {
    "id": "1-10-1",
    "grade": 1,
    "class_num": 10,
    "student_num": 1,
    "name": "고채연",
    "birth": "20100715",
    "department": "문화콘텐츠과"
  },
  "1-10-2": {
    "id": "1-10-2",
    "grade": 1,
    "class_num": 10,
    "student_num": 2,
    "name": "김아린",
    "birth": "20101206",
    "department": "문화콘텐츠과"
  },
  "1-10-3": {
    "id": "1-10-3",
    "grade": 1,
    "class_num": 10,
    "student_num": 3,
    "name": "김지민",
    "birth": "20100317",
    "department": "문화콘텐츠과"
  },
  "1-10-4": {
    "id": "1-10-4",
    "grade": 1,
    "class_num": 10,
    "student_num": 4,
    "name": "민서희",
    "birth": "20100514",
    "department": "문화콘텐츠과"
  },
  "1-10-5": {
    "id": "1-10-5",
    "grade": 1,
    "class_num": 10,
    "student_num": 5,
    "name": "변혜진",
    "birth": "20100929",
    "department": "문화콘텐츠과"
  },
  "1-10-6": {
    "id": "1-10-6",
    "grade": 1,
    "class_num": 10,
    "student_num": 6,
    "name": "윤채원",
    "birth": "20100729",
    "department": "문화콘텐츠과"
  },
  "1-10-7": {
    "id": "1-10-7",
    "grade": 1,
    "class_num": 10,
    "student_num": 7,
    "name": "이가은",
    "birth": "20100222",
    "department": "문화콘텐츠과"
  },
  "1-10-8": {
    "id": "1-10-8",
    "grade": 1,
    "class_num": 10,
    "student_num": 8,
    "name": "이나라",
    "birth": "20100531",
    "department": "문화콘텐츠과"
  },
  "1-10-9": {
    "id": "1-10-9",
    "grade": 1,
    "class_num": 10,
    "student_num": 9,
    "name": "이수민",
    "birth": "20100105",
    "department": "문화콘텐츠과"
  },
  "1-10-10": {
    "id": "1-10-10",
    "grade": 1,
    "class_num": 10,
    "student_num": 10,
    "name": "정루비",
    "birth": "20100110",
    "department": "문화콘텐츠과"
  },
  "1-10-11": {
    "id": "1-10-11",
    "grade": 1,
    "class_num": 10,
    "student_num": 11,
    "name": "정요원",
    "birth": "20100222",
    "department": "문화콘텐츠과"
  },
  "1-10-12": {
    "id": "1-10-12",
    "grade": 1,
    "class_num": 10,
    "student_num": 12,
    "name": "좌민경",
    "birth": "20100309",
    "department": "문화콘텐츠과"
  },
  "1-10-13": {
    "id": "1-10-13",
    "grade": 1,
    "class_num": 10,
    "student_num": 13,
    "name": "한하랑",
    "birth": "20100825",
    "department": "문화콘텐츠과"
  },
  "1-10-14": {
    "id": "1-10-14",
    "grade": 1,
    "class_num": 10,
    "student_num": 14,
    "name": "강지민",
    "birth": "20101101",
    "department": "문화콘텐츠과"
  },
  "1-10-15": {
    "id": "1-10-15",
    "grade": 1,
    "class_num": 10,
    "student_num": 15,
    "name": "김만세",
    "birth": "20100708",
    "department": "문화콘텐츠과"
  },
  "1-10-16": {
    "id": "1-10-16",
    "grade": 1,
    "class_num": 10,
    "student_num": 16,
    "name": "김영남",
    "birth": "20100410",
    "department": "문화콘텐츠과"
  },
  "1-10-17": {
    "id": "1-10-17",
    "grade": 1,
    "class_num": 10,
    "student_num": 17,
    "name": "김하랑",
    "birth": "20100602",
    "department": "문화콘텐츠과"
  },
  "1-10-18": {
    "id": "1-10-18",
    "grade": 1,
    "class_num": 10,
    "student_num": 18,
    "name": "나지성",
    "birth": "20100523",
    "department": "문화콘텐츠과"
  },
  "1-10-19": {
    "id": "1-10-19",
    "grade": 1,
    "class_num": 10,
    "student_num": 19,
    "name": "라유담",
    "birth": "20100629",
    "department": "문화콘텐츠과"
  },
  "1-10-20": {
    "id": "1-10-20",
    "grade": 1,
    "class_num": 10,
    "student_num": 20,
    "name": "부경훈",
    "birth": "20100118",
    "department": "문화콘텐츠과"
  },
  "1-10-21": {
    "id": "1-10-21",
    "grade": 1,
    "class_num": 10,
    "student_num": 21,
    "name": "이경호",
    "birth": "20100924",
    "department": "문화콘텐츠과"
  },
  "1-10-22": {
    "id": "1-10-22",
    "grade": 1,
    "class_num": 10,
    "student_num": 22,
    "name": "이승훈",
    "birth": "20100526",
    "department": "문화콘텐츠과"
  },
  "1-10-23": {
    "id": "1-10-23",
    "grade": 1,
    "class_num": 10,
    "student_num": 23,
    "name": "이시후",
    "birth": "20100901",
    "department": "문화콘텐츠과"
  },
  "1-10-24": {
    "id": "1-10-24",
    "grade": 1,
    "class_num": 10,
    "student_num": 24,
    "name": "임건호",
    "birth": "20100617",
    "department": "문화콘텐츠과"
  },
  "1-10-25": {
    "id": "1-10-25",
    "grade": 1,
    "class_num": 10,
    "student_num": 25,
    "name": "최강",
    "birth": "20101215",
    "department": "문화콘텐츠과"
  },
  "2-7-1": {
    "id": "2-7-1",
    "grade": 2,
    "class_num": 7,
    "student_num": 1,
    "name": "강민혜",
    "birth": "20090807",
    "department": "금융비즈니스과"
  },
  "2-7-2": {
    "id": "2-7-2",
    "grade": 2,
    "class_num": 7,
    "student_num": 2,
    "name": "강서현",
    "birth": "20090307",
    "department": "금융비즈니스과"
  },
  "2-7-3": {
    "id": "2-7-3",
    "grade": 2,
    "class_num": 7,
    "student_num": 3,
    "name": "고태란",
    "birth": "20090805",
    "department": "금융비즈니스과"
  },
  "2-7-4": {
    "id": "2-7-4",
    "grade": 2,
    "class_num": 7,
    "student_num": 4,
    "name": "김민지",
    "birth": "20090518",
    "department": "금융비즈니스과"
  },
  "2-7-5": {
    "id": "2-7-5",
    "grade": 2,
    "class_num": 7,
    "student_num": 5,
    "name": "박채이",
    "birth": "20090202",
    "department": "금융비즈니스과"
  },
  "2-7-6": {
    "id": "2-7-6",
    "grade": 2,
    "class_num": 7,
    "student_num": 6,
    "name": "신서희",
    "birth": "20091208",
    "department": "금융비즈니스과"
  },
  "2-7-7": {
    "id": "2-7-7",
    "grade": 2,
    "class_num": 7,
    "student_num": 7,
    "name": "이하람",
    "birth": "20090309",
    "department": "금융비즈니스과"
  },
  "2-7-8": {
    "id": "2-7-8",
    "grade": 2,
    "class_num": 7,
    "student_num": 8,
    "name": "임소은",
    "birth": "20090203",
    "department": "금융비즈니스과"
  },
  "2-7-9": {
    "id": "2-7-9",
    "grade": 2,
    "class_num": 7,
    "student_num": 9,
    "name": "강시현",
    "birth": "20090808",
    "department": "금융비즈니스과"
  },
  "2-7-10": {
    "id": "2-7-10",
    "grade": 2,
    "class_num": 7,
    "student_num": 10,
    "name": "강인찬",
    "birth": "20090606",
    "department": "금융비즈니스과"
  },
  "2-7-11": {
    "id": "2-7-11",
    "grade": 2,
    "class_num": 7,
    "student_num": 11,
    "name": "김이준",
    "birth": "20090802",
    "department": "금융비즈니스과"
  },
  "2-7-12": {
    "id": "2-7-12",
    "grade": 2,
    "class_num": 7,
    "student_num": 12,
    "name": "김준서",
    "birth": "20091225",
    "department": "금융비즈니스과"
  },
  "2-7-13": {
    "id": "2-7-13",
    "grade": 2,
    "class_num": 7,
    "student_num": 13,
    "name": "문성현",
    "birth": "20091118",
    "department": "금융비즈니스과"
  },
  "2-7-14": {
    "id": "2-7-14",
    "grade": 2,
    "class_num": 7,
    "student_num": 14,
    "name": "변재현",
    "birth": "20090120",
    "department": "금융비즈니스과"
  },
  "2-7-15": {
    "id": "2-7-15",
    "grade": 2,
    "class_num": 7,
    "student_num": 15,
    "name": "부효빈",
    "birth": "20090315",
    "department": "금융비즈니스과"
  },
  "2-7-16": {
    "id": "2-7-16",
    "grade": 2,
    "class_num": 7,
    "student_num": 16,
    "name": "송예준",
    "birth": "20090103",
    "department": "금융비즈니스과"
  },
  "2-7-17": {
    "id": "2-7-17",
    "grade": 2,
    "class_num": 7,
    "student_num": 17,
    "name": "신승현",
    "birth": "20090303",
    "department": "금융비즈니스과"
  },
  "2-7-18": {
    "id": "2-7-18",
    "grade": 2,
    "class_num": 7,
    "student_num": 18,
    "name": "안태훈",
    "birth": "20090505",
    "department": "금융비즈니스과"
  },
  "2-7-19": {
    "id": "2-7-19",
    "grade": 2,
    "class_num": 7,
    "student_num": 19,
    "name": "용예찬",
    "birth": "20090403",
    "department": "금융비즈니스과"
  },
  "2-7-20": {
    "id": "2-7-20",
    "grade": 2,
    "class_num": 7,
    "student_num": 20,
    "name": "이세리찬",
    "birth": "20091223",
    "department": "금융비즈니스과"
  },
  "2-7-21": {
    "id": "2-7-21",
    "grade": 2,
    "class_num": 7,
    "student_num": 21,
    "name": "이준협",
    "birth": "20090517",
    "department": "금융비즈니스과"
  },
  "2-7-22": {
    "id": "2-7-22",
    "grade": 2,
    "class_num": 7,
    "student_num": 22,
    "name": "정대근",
    "birth": "20091008",
    "department": "금융비즈니스과"
  },
  "2-7-23": {
    "id": "2-7-23",
    "grade": 2,
    "class_num": 7,
    "student_num": 23,
    "name": "진민혁",
    "birth": "20090622",
    "department": "금융비즈니스과"
  },
  "2-7-24": {
    "id": "2-7-24",
    "grade": 2,
    "class_num": 7,
    "student_num": 24,
    "name": "진승현",
    "birth": "20091118",
    "department": "금융비즈니스과"
  },
  "2-7-25": {
    "id": "2-7-25",
    "grade": 2,
    "class_num": 7,
    "student_num": 25,
    "name": "한지상",
    "birth": "20090617",
    "department": "금융비즈니스과"
  },
  "2-8-1": {
    "id": "2-8-1",
    "grade": 2,
    "class_num": 8,
    "student_num": 1,
    "name": "강나은",
    "birth": "20090310",
    "department": "금융비즈니스과"
  },
  "2-8-2": {
    "id": "2-8-2",
    "grade": 2,
    "class_num": 8,
    "student_num": 2,
    "name": "김가원",
    "birth": "20100308",
    "department": "금융비즈니스과"
  },
  "2-8-3": {
    "id": "2-8-3",
    "grade": 2,
    "class_num": 8,
    "student_num": 3,
    "name": "김노아",
    "birth": "20091219",
    "department": "금융비즈니스과"
  },
  "2-8-4": {
    "id": "2-8-4",
    "grade": 2,
    "class_num": 8,
    "student_num": 4,
    "name": "박효민",
    "birth": "20090416",
    "department": "금융비즈니스과"
  },
  "2-8-5": {
    "id": "2-8-5",
    "grade": 2,
    "class_num": 8,
    "student_num": 5,
    "name": "서가예",
    "birth": "20090917",
    "department": "금융비즈니스과"
  },
  "2-8-6": {
    "id": "2-8-6",
    "grade": 2,
    "class_num": 8,
    "student_num": 6,
    "name": "장수연",
    "birth": "20090809",
    "department": "금융비즈니스과"
  },
  "2-8-7": {
    "id": "2-8-7",
    "grade": 2,
    "class_num": 8,
    "student_num": 7,
    "name": "주하은",
    "birth": "20090630",
    "department": "금융비즈니스과"
  },
  "2-8-8": {
    "id": "2-8-8",
    "grade": 2,
    "class_num": 8,
    "student_num": 8,
    "name": "강경호",
    "birth": "20090407",
    "department": "금융비즈니스과"
  },
  "2-8-9": {
    "id": "2-8-9",
    "grade": 2,
    "class_num": 8,
    "student_num": 9,
    "name": "강민범",
    "birth": "20090714",
    "department": "금융비즈니스과"
  },
  "2-8-10": {
    "id": "2-8-10",
    "grade": 2,
    "class_num": 8,
    "student_num": 10,
    "name": "김기표",
    "birth": "20090515",
    "department": "금융비즈니스과"
  },
  "2-8-11": {
    "id": "2-8-11",
    "grade": 2,
    "class_num": 8,
    "student_num": 11,
    "name": "김도일",
    "birth": "20090319",
    "department": "금융비즈니스과"
  },
  "2-8-12": {
    "id": "2-8-12",
    "grade": 2,
    "class_num": 8,
    "student_num": 12,
    "name": "김승규",
    "birth": "20090310",
    "department": "금융비즈니스과"
  },
  "2-8-13": {
    "id": "2-8-13",
    "grade": 2,
    "class_num": 8,
    "student_num": 13,
    "name": "김휘람",
    "birth": "20090109",
    "department": "금융비즈니스과"
  },
  "2-8-14": {
    "id": "2-8-14",
    "grade": 2,
    "class_num": 8,
    "student_num": 14,
    "name": "박준",
    "birth": "20091105",
    "department": "금융비즈니스과"
  },
  "2-8-15": {
    "id": "2-8-15",
    "grade": 2,
    "class_num": 8,
    "student_num": 15,
    "name": "신대성",
    "birth": "20090529",
    "department": "금융비즈니스과"
  },
  "2-8-16": {
    "id": "2-8-16",
    "grade": 2,
    "class_num": 8,
    "student_num": 16,
    "name": "양은혁",
    "birth": "20090814",
    "department": "금융비즈니스과"
  },
  "2-8-17": {
    "id": "2-8-17",
    "grade": 2,
    "class_num": 8,
    "student_num": 17,
    "name": "이세리혁",
    "birth": "20091223",
    "department": "금융비즈니스과"
  },
  "2-8-18": {
    "id": "2-8-18",
    "grade": 2,
    "class_num": 8,
    "student_num": 18,
    "name": "이의헌",
    "birth": "20091005",
    "department": "금융비즈니스과"
  },
  "2-8-19": {
    "id": "2-8-19",
    "grade": 2,
    "class_num": 8,
    "student_num": 19,
    "name": "조의찬",
    "birth": "20090506",
    "department": "금융비즈니스과"
  },
  "2-8-20": {
    "id": "2-8-20",
    "grade": 2,
    "class_num": 8,
    "student_num": 20,
    "name": "현승호",
    "birth": "20090129",
    "department": "금융비즈니스과"
  },
  "2-8-21": {
    "id": "2-8-21",
    "grade": 2,
    "class_num": 8,
    "student_num": 21,
    "name": "현유진",
    "birth": "20090514",
    "department": "금융비즈니스과"
  },
  "2-8-22": {
    "id": "2-8-22",
    "grade": 2,
    "class_num": 8,
    "student_num": 22,
    "name": "홍상운",
    "birth": "20090722",
    "department": "금융비즈니스과"
  },
  "2-8-23": {
    "id": "2-8-23",
    "grade": 2,
    "class_num": 8,
    "student_num": 23,
    "name": "황보성",
    "birth": "20090806",
    "department": "금융비즈니스과"
  },
  "2-8-24": {
    "id": "2-8-24",
    "grade": 2,
    "class_num": 8,
    "student_num": 24,
    "name": "황승필",
    "birth": "20090619",
    "department": "금융비즈니스과"
  },
  "2-9-1": {
    "id": "2-9-1",
    "grade": 2,
    "class_num": 9,
    "student_num": 1,
    "name": "강별바다",
    "birth": "20090113",
    "department": "문화콘텐츠과"
  },
  "2-9-2": {
    "id": "2-9-2",
    "grade": 2,
    "class_num": 9,
    "student_num": 2,
    "name": "김가은",
    "birth": "20090330",
    "department": "문화콘텐츠과"
  },
  "2-9-3": {
    "id": "2-9-3",
    "grade": 2,
    "class_num": 9,
    "student_num": 3,
    "name": "김소정",
    "birth": "20091109",
    "department": "문화콘텐츠과"
  },
  "2-9-4": {
    "id": "2-9-4",
    "grade": 2,
    "class_num": 9,
    "student_num": 4,
    "name": "김수연",
    "birth": "20091027",
    "department": "문화콘텐츠과"
  },
  "2-9-5": {
    "id": "2-9-5",
    "grade": 2,
    "class_num": 9,
    "student_num": 5,
    "name": "김예은",
    "birth": "20090709",
    "department": "문화콘텐츠과"
  },
  "2-9-6": {
    "id": "2-9-6",
    "grade": 2,
    "class_num": 9,
    "student_num": 6,
    "name": "김은정",
    "birth": "20090213",
    "department": "문화콘텐츠과"
  },
  "2-9-7": {
    "id": "2-9-7",
    "grade": 2,
    "class_num": 9,
    "student_num": 7,
    "name": "김주희",
    "birth": "20090127",
    "department": "문화콘텐츠과"
  },
  "2-9-8": {
    "id": "2-9-8",
    "grade": 2,
    "class_num": 9,
    "student_num": 8,
    "name": "김채희",
    "birth": "20090814",
    "department": "문화콘텐츠과"
  },
  "2-9-9": {
    "id": "2-9-9",
    "grade": 2,
    "class_num": 9,
    "student_num": 9,
    "name": "오수현",
    "birth": "20090309",
    "department": "문화콘텐츠과"
  },
  "2-9-10": {
    "id": "2-9-10",
    "grade": 2,
    "class_num": 9,
    "student_num": 10,
    "name": "윤혜원",
    "birth": "20090818",
    "department": "문화콘텐츠과"
  },
  "2-9-11": {
    "id": "2-9-11",
    "grade": 2,
    "class_num": 9,
    "student_num": 11,
    "name": "이찬희",
    "birth": "20090402",
    "department": "문화콘텐츠과"
  },
  "2-9-12": {
    "id": "2-9-12",
    "grade": 2,
    "class_num": 9,
    "student_num": 12,
    "name": "임도연",
    "birth": "20090918",
    "department": "문화콘텐츠과"
  },
  "2-9-13": {
    "id": "2-9-13",
    "grade": 2,
    "class_num": 9,
    "student_num": 13,
    "name": "지민지",
    "birth": "20090618",
    "department": "문화콘텐츠과"
  },
  "2-9-14": {
    "id": "2-9-14",
    "grade": 2,
    "class_num": 9,
    "student_num": 14,
    "name": "현가윤",
    "birth": "20091207",
    "department": "문화콘텐츠과"
  },
  "2-9-15": {
    "id": "2-9-15",
    "grade": 2,
    "class_num": 9,
    "student_num": 15,
    "name": "강건영",
    "birth": "20090129",
    "department": "문화콘텐츠과"
  },
  "2-9-16": {
    "id": "2-9-16",
    "grade": 2,
    "class_num": 9,
    "student_num": 16,
    "name": "강지훈",
    "birth": "20090629",
    "department": "문화콘텐츠과"
  },
  "2-9-17": {
    "id": "2-9-17",
    "grade": 2,
    "class_num": 9,
    "student_num": 17,
    "name": "김민혁",
    "birth": "20090724",
    "department": "문화콘텐츠과"
  },
  "2-9-18": {
    "id": "2-9-18",
    "grade": 2,
    "class_num": 9,
    "student_num": 18,
    "name": "김현건",
    "birth": "20091226",
    "department": "문화콘텐츠과"
  },
  "2-9-19": {
    "id": "2-9-19",
    "grade": 2,
    "class_num": 9,
    "student_num": 19,
    "name": "김현민",
    "birth": "20090302",
    "department": "문화콘텐츠과"
  },
  "2-9-20": {
    "id": "2-9-20",
    "grade": 2,
    "class_num": 9,
    "student_num": 20,
    "name": "양지훈",
    "birth": "20090203",
    "department": "문화콘텐츠과"
  },
  "2-9-21": {
    "id": "2-9-21",
    "grade": 2,
    "class_num": 9,
    "student_num": 21,
    "name": "윤성호",
    "birth": "20090311",
    "department": "문화콘텐츠과"
  },
  "2-9-22": {
    "id": "2-9-22",
    "grade": 2,
    "class_num": 9,
    "student_num": 22,
    "name": "전상훈",
    "birth": "20090515",
    "department": "문화콘텐츠과"
  },
  "2-9-23": {
    "id": "2-9-23",
    "grade": 2,
    "class_num": 9,
    "student_num": 23,
    "name": "한승훈",
    "birth": "20090206",
    "department": "문화콘텐츠과"
  },
  "2-9-24": {
    "id": "2-9-24",
    "grade": 2,
    "class_num": 9,
    "student_num": 24,
    "name": "한장혁",
    "birth": "20090415",
    "department": "문화콘텐츠과"
  },
  "2-10-1": {
    "id": "2-10-1",
    "grade": 2,
    "class_num": 10,
    "student_num": 1,
    "name": "강수연",
    "birth": "20090417",
    "department": "문화콘텐츠과"
  },
  "2-10-2": {
    "id": "2-10-2",
    "grade": 2,
    "class_num": 10,
    "student_num": 2,
    "name": "강예은",
    "birth": "20091124",
    "department": "문화콘텐츠과"
  },
  "2-10-3": {
    "id": "2-10-3",
    "grade": 2,
    "class_num": 10,
    "student_num": 3,
    "name": "고가연",
    "birth": "20090209",
    "department": "문화콘텐츠과"
  },
  "2-10-4": {
    "id": "2-10-4",
    "grade": 2,
    "class_num": 10,
    "student_num": 4,
    "name": "김가연",
    "birth": "20090529",
    "department": "문화콘텐츠과"
  },
  "2-10-5": {
    "id": "2-10-5",
    "grade": 2,
    "class_num": 10,
    "student_num": 5,
    "name": "김나경",
    "birth": "20091123",
    "department": "문화콘텐츠과"
  },
  "2-10-6": {
    "id": "2-10-6",
    "grade": 2,
    "class_num": 10,
    "student_num": 6,
    "name": "김봄",
    "birth": "20090115",
    "department": "문화콘텐츠과"
  },
  "2-10-7": {
    "id": "2-10-7",
    "grade": 2,
    "class_num": 10,
    "student_num": 7,
    "name": "김은서",
    "birth": "20090214",
    "department": "문화콘텐츠과"
  },
  "2-10-8": {
    "id": "2-10-8",
    "grade": 2,
    "class_num": 10,
    "student_num": 8,
    "name": "송하예린",
    "birth": "20090206",
    "department": "문화콘텐츠과"
  },
  "2-10-9": {
    "id": "2-10-9",
    "grade": 2,
    "class_num": 10,
    "student_num": 9,
    "name": "이수아",
    "birth": "20090304",
    "department": "문화콘텐츠과"
  },
  "2-10-10": {
    "id": "2-10-10",
    "grade": 2,
    "class_num": 10,
    "student_num": 10,
    "name": "이은주",
    "birth": "20090728",
    "department": "문화콘텐츠과"
  },
  "2-10-11": {
    "id": "2-10-11",
    "grade": 2,
    "class_num": 10,
    "student_num": 11,
    "name": "최하늘",
    "birth": "20091002",
    "department": "문화콘텐츠과"
  },
  "2-10-12": {
    "id": "2-10-12",
    "grade": 2,
    "class_num": 10,
    "student_num": 12,
    "name": "현지원",
    "birth": "20090308",
    "department": "문화콘텐츠과"
  },
  "2-10-13": {
    "id": "2-10-13",
    "grade": 2,
    "class_num": 10,
    "student_num": 13,
    "name": "강현빈",
    "birth": "20090818",
    "department": "문화콘텐츠과"
  },
  "2-10-14": {
    "id": "2-10-14",
    "grade": 2,
    "class_num": 10,
    "student_num": 14,
    "name": "권동환",
    "birth": "20090915",
    "department": "문화콘텐츠과"
  },
  "2-10-15": {
    "id": "2-10-15",
    "grade": 2,
    "class_num": 10,
    "student_num": 15,
    "name": "김진협",
    "birth": "20091126",
    "department": "문화콘텐츠과"
  },
  "2-10-16": {
    "id": "2-10-16",
    "grade": 2,
    "class_num": 10,
    "student_num": 16,
    "name": "김태양",
    "birth": "20091010",
    "department": "문화콘텐츠과"
  },
  "2-10-17": {
    "id": "2-10-17",
    "grade": 2,
    "class_num": 10,
    "student_num": 17,
    "name": "김현규",
    "birth": "20090320",
    "department": "문화콘텐츠과"
  },
  "2-10-18": {
    "id": "2-10-18",
    "grade": 2,
    "class_num": 10,
    "student_num": 18,
    "name": "문수혁",
    "birth": "20090121",
    "department": "문화콘텐츠과"
  },
  "2-10-19": {
    "id": "2-10-19",
    "grade": 2,
    "class_num": 10,
    "student_num": 19,
    "name": "문준호",
    "birth": "20091212",
    "department": "문화콘텐츠과"
  },
  "2-10-20": {
    "id": "2-10-20",
    "grade": 2,
    "class_num": 10,
    "student_num": 20,
    "name": "장우주",
    "birth": "20090205",
    "department": "문화콘텐츠과"
  },
  "2-10-21": {
    "id": "2-10-21",
    "grade": 2,
    "class_num": 10,
    "student_num": 21,
    "name": "정유준",
    "birth": "20090324",
    "department": "문화콘텐츠과"
  },
  "2-10-22": {
    "id": "2-10-22",
    "grade": 2,
    "class_num": 10,
    "student_num": 22,
    "name": "허준원",
    "birth": "20091006",
    "department": "문화콘텐츠과"
  },
  "2-10-23": {
    "id": "2-10-23",
    "grade": 2,
    "class_num": 10,
    "student_num": 23,
    "name": "허지유",
    "birth": "20091106",
    "department": "문화콘텐츠과"
  },
  "2-10-24": {
    "id": "2-10-24",
    "grade": 2,
    "class_num": 10,
    "student_num": 24,
    "name": "송승우",
    "birth": "20090213",
    "department": "문화콘텐츠과"
  }
};
