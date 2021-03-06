const universities = [
    {
        rank: 1,
        name: "Massachusetts Institute of Technology",
        location: "Massachusetts",
        tutionFees: 55510,
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/massachusetts-institute-of-technology-02077",
        img: "https://www.usnews.com/dims4/USNEWS/e5abb73/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fa8%2Fc5193da7eb9dcbd26e794c018ac87a%2Fcollege-photo_6935.jpg",
        applicationFee: "$75",
    },
    {
        rank: 2,
        name: "Stanford University",
        location: "California",
        tutionFees: 56861,
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/stanford-university-02020",
        img: "https://www.usnews.com/dims4/USNEWS/a0f43b7/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F86%2F7fb7902ee86d1acfacec05a30c04d6%2Fcollege-photo_199.jpg",
        applicationFee: "$125 ",
    },
    {
        rank: 3,
        name: "University of California Berkeley",
        location: "California",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/university-of-california-berkeley-02021",
        tutionFees: 26544,
        img: "https://www.usnews.com/dims4/USNEWS/738e88c/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fde%2F0d94d5e7c41f245912bce74f83a846%2Fcollege-photo_2013.jpg",
        applicationFee: "$120",
    },
    {
        rank: 4,
        name: "Carnegie Mellon University",
        location: "Pittsburgh",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/carnegie-mellon-university-02152",
        tutionFees: 50100,
        img: "https://www.usnews.com/dims4/USNEWS/cde3b86/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fc7%2F5cc4f10c79126ea2a09bd2c7bebf75%2Fcollege-photo_33151.jpg",
        applicationFee: "$75",
    },
    {
        rank: 5,
        name: "Purdue University--West Lafayette",
        location: "Indiana",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/purdue-university-main-campus-02057",
        tutionFees: 29644,
        img: "https://www.usnews.com/dims4/USNEWS/28270b0/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F1b%2F10e3ffe142fb8c23d5128df1de75a2%2Fcollege-photo_3097.jpg",
        applicationFee: "$75",
    },
    {
        rank: 6,
        name: "University of Texas--Austin (Cockrell)",
        location: "Texas",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/the-university-of-texas-at-austin-02178",
        tutionFees: 19320,
        img: "https://www.usnews.com/dims4/USNEWS/4a04f67/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fea%2Fc51bba521211dbd1e7f6754542e180%2Fcollege-photo_26169.jpg",
        applicationFee: "$90",
    },
    {
        rank: 7,
        name: "California Institute of Technology",
        location: "California",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/california-institute-of-technology-02009",
        tutionFees: "N/A",
        img: "https://www.usnews.com/dims4/USNEWS/580b8f5/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F4f%2F018292fce3b77f5dcd5d45dee4114b%2Fcollege-photo_34890.jpg",
        applicationFee: "$100",
    },
    {
        rank: 8,
        name: "Georgia Institute of Technology",
        location: "Georgia",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/georgia-institute-of-technology-02049",
        tutionFees: 29140,
        img: "https://www.usnews.com/dims4/USNEWS/97e8d45/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fb7%2F3d7674f4887a909f520eb9c4d17fd1%2F16NE10500-P1-018-h.jpg",
        applicationFee: "$85",
    },
    {
        rank: 9,
        name: "University of Michigan--Ann Arbor",
        location: "Michigan",
        link: "https://usnews.com/best-graduate-schools/top-engineering-schools/university-of-michigan-ann-arbor-02088",
        tutionFees: 53168,
        img: "https:/www.usnews.com/dims4/USNEWS/9a06f36/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F18%2F9a8520bedd7484acede46418483a33%2FUMMS_THSL_at_night.jpg",
        applicationFee: "$90",
    },
    {
        rank: 10,
        name: "Texas A&M University--College Station",
        location: "Texas",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/texas-a-m-university-02174",
        tutionFees: 816,
        img: "https://www.usnews.com/dims4/USNEWS/446a929/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F1c%2F7f432be129baa563939eab4c6bc08c%2Fcollege-photo_4940.jpg",
        applicationFee: "$148",
    },
    {
        rank: 11,
        name: "University of California--San Diego (Jacobs)",
        location: "California",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/university-of-california-san-diego-02025",
        tutionFees: 26544,
        img: "https://www.usnews.com/dims4/USNEWS/6ae2504/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F36%2F9cc7aaa38ba2d5ac8c632bdda24e86%2Fcollege-photo_6861.jpg",
        applicationFee: "$140",
    },
    {
        rank: 12,
        name: "University of Illinois--Urbana-Champaign",
        location: "Illinois",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/university-of-illinois-at-urbana-champaign-02055",
        tutionFees: 36150,
        img: "https://www.usnews.com/dims4/USNEWS/613bce5/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Feb%2F5f%2Fc071066744b9acfaf845fa9f7970%2Fillinois-grad-engineering.png",
        applicationFee: "$90",
    },
    {
        rank: 13,
        name: "Columbia University (Fu Foundation)",
        location: "New York",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/columbia-university-02116",
        tutionFees: 54528,
        img: "https://www.usnews.com/dims4/USNEWS/b75cadc/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F1d%2F422774361a22d50cb6230e30fbeb84%2Fcollege-photo_36142.jpg",
        applicationFee: "$85",
    },
    {
        rank: 14,
        name: "Cornell University",
        location: "New York",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/cornell-university-02118",
        tutionFees: 29500,
        img: "https://www.usnews.com/dims4/USNEWS/fe99acf/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F59%2F0dd395ffda36a08c792a2b32303c7b%2Fcollege-photo_73.jpg",
        applicationFee: "$105",
    },
    {
        rank: 15,
        name: "University of Southern California (Viterbi)",
        location: "California",
        link: "https://www.usnews.com/best-graduate-schools/top-engineering-schools/university-of-southern-california-02027",
        tutionFees: 2199,
        img: "data:image/jpeg;base64,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",
        applicationFee: "$90",
    },
];

export default universities;
