export interface ResultRow {
  rank: string;
  institution: string;
  offers: number;
  fiveYearTotal: number;
}

export interface ResultTable {
  id: string;
  kicker: string;
  caption: string;
  rows: ResultRow[];
}

export const resultTables: ResultTable[] = [
  {
    id: "us-universities",
    kicker: "US Universities",
    caption: "Class of 2029 offers and five-year cumulative admits",
    rows: [
      { rank: "1", institution: "Princeton University", offers: 8, fiveYearTotal: 27 },
      { rank: "2", institution: "Massachusetts Institute of Technology", offers: 6, fiveYearTotal: 41 },
      { rank: "3", institution: "Harvard University", offers: 8, fiveYearTotal: 35 },
      { rank: "4", institution: "Stanford University", offers: 18, fiveYearTotal: 47 },
      { rank: "5", institution: "Yale University", offers: 13, fiveYearTotal: 45 },
      { rank: "6", institution: "California Institute of Technology", offers: 4, fiveYearTotal: 11 },
      { rank: "6", institution: "Duke University", offers: 14, fiveYearTotal: 51 },
      { rank: "6", institution: "Johns Hopkins University", offers: 19, fiveYearTotal: 57 },
      { rank: "6", institution: "Northwestern University", offers: 16, fiveYearTotal: 68 },
      { rank: "10", institution: "University of Pennsylvania", offers: 14, fiveYearTotal: 69 },
      { rank: "11", institution: "Cornell University", offers: 27, fiveYearTotal: 95 },
      { rank: "11", institution: "University of Chicago", offers: 8, fiveYearTotal: 47 },
      { rank: "13", institution: "Brown University", offers: 12, fiveYearTotal: 61 },
      { rank: "13", institution: "Columbia University", offers: 14, fiveYearTotal: 54 },
      { rank: "15", institution: "Dartmouth University", offers: 3, fiveYearTotal: 23 },
      { rank: "15", institution: "University of California, Los Angeles", offers: 48, fiveYearTotal: 172 },
      { rank: "17", institution: "University of California, Berkeley", offers: 42, fiveYearTotal: 181 },
      { rank: "18", institution: "Rice University", offers: 16, fiveYearTotal: 56 },
      { rank: "18", institution: "University of Notre Dame", offers: 3, fiveYearTotal: 20 },
      { rank: "18", institution: "Vanderbilt University", offers: 12, fiveYearTotal: 43 },
      { rank: "21", institution: "Carnegie Mellon University", offers: 18, fiveYearTotal: 67 },
      { rank: "21", institution: "University of Michigan, Ann Arbor", offers: 28, fiveYearTotal: 122 },
      { rank: "21", institution: "Washington University in St. Louis", offers: 17, fiveYearTotal: 48 },
      { rank: "24", institution: "Emory University", offers: 18, fiveYearTotal: 83 },
      { rank: "24", institution: "Georgetown University", offers: 11, fiveYearTotal: 37 },
      { rank: "24", institution: "University of Virginia", offers: 14, fiveYearTotal: 63 },
      { rank: "27", institution: "University of North Carolina at Chapel Hill", offers: 25, fiveYearTotal: 87 },
      { rank: "27", institution: "University of Southern California", offers: 38, fiveYearTotal: 129 },
      { rank: "29", institution: "University of California, San Diego", offers: 70, fiveYearTotal: 267 },
      { rank: "30", institution: "New York University", offers: 43, fiveYearTotal: 178 },
      { rank: "30", institution: "University of Texas at Austin", offers: 22, fiveYearTotal: 57 },
    ],
  },
  {
    id: "liberal-arts",
    kicker: "Liberal Arts Colleges",
    caption: "Class of 2029 offers and five-year cumulative admits",
    rows: [
      { rank: "1", institution: "Williams College", offers: 2, fiveYearTotal: 12 },
      { rank: "2", institution: "Amherst College", offers: 1, fiveYearTotal: 10 },
      { rank: "3", institution: "Swarthmore College", offers: 2, fiveYearTotal: 9 },
      { rank: "7", institution: "Wellesley College", offers: 4, fiveYearTotal: 17 },
    ],
  },
  {
    id: "uk-universities",
    kicker: "UK Universities",
    caption: "Class of 2029 offers and five-year cumulative admits",
    rows: [
      { rank: "1", institution: "University of Cambridge", offers: 2, fiveYearTotal: 6 },
      { rank: "5", institution: "Imperial College, London", offers: 2, fiveYearTotal: 22 },
      { rank: "7", institution: "Durham University", offers: 2, fiveYearTotal: 26 },
      { rank: "10", institution: "University College London", offers: 10, fiveYearTotal: 50 },
    ],
  },
  {
    id: "art-design",
    kicker: "Art and Design Schools",
    caption: "Class of 2029 offers and five-year cumulative admits",
    rows: [
      { rank: "★", institution: "Pratt Institute", offers: 6, fiveYearTotal: 20 },
      { rank: "★", institution: "Savannah College of Art and Design", offers: 4, fiveYearTotal: 6 },
      { rank: "★", institution: "Parsons School of Design", offers: 2, fiveYearTotal: 10 },
      { rank: "★", institution: "Rhode Island School of Design", offers: 6, fiveYearTotal: 14 },
    ],
  },
];
