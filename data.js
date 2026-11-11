export const CATEGORY_COLOR = {
  'Fast Fashion': '#D6453D',
  Sportswear: '#4A7C9E',
  Luxury: '#2E3F5C',
}

export const BRANDS = [
  {
    id: 'inditex-zara',
    name: 'Inditex (Zara)',
    parentCompany: 'Inditex',
    category: 'Fast Fashion',
    reportingPeriod: 'Calendar year',
    scope3Boundary: 'Includes use of sold products',
    comparability: 'Comparable within Inditex. Cross-brand Scope 3 boundary audit pending.',
    lastVerified: '10 Jul 2026',
    source: 'Inditex Group Annual Report 2024',
    sourceUrl: 'https://www.inditex.com/itxcomweb/api/media/604197b9-50de-4f4f-ab84-c1e379cb3fd0/Inditex_Group_Annual_Report_2024.pdf',
    history: [
      { year: 2018, s1: 76136, s2: 419448, s3: 13421935, basis: 'Restated/current-basis values presented in the 2024 report' },
      { year: 2023, s1: 49686, s2: 1153, s3: 13418829, basis: '2024 report retrospectively presents 2023 values' },
      { year: 2024, s1: 59572, s2: 1340, s3: 13427762, basis: 'Current reported year' },
    ],
  },
  {
    id: 'hm-group', name: 'H&M Group', parentCompany: 'H&M Group', category: 'Fast Fashion', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'H&M Annual & Sustainability Report 2024', sourceUrl: 'https://hmgroup.com/wp-content/uploads/2025/03/HM-Group-Annual-and-sustainability-report-2024.pdf',
    history: [{ year: 2023, s1: 15754, s2: 39508, s3: 6754000 }, { year: 2024, s1: 15102, s2: 26553, s3: 6955000 }],
  },
  {
    id: 'uniqlo', name: 'Uniqlo', parentCompany: 'Fast Retailing', category: 'Fast Fashion', reportingPeriod: 'Fiscal year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Fast Retailing climate disclosures', sourceUrl: 'https://www.fastretailing.com/eng/sustainability/environment/climatechange.html',
    history: [{ year: 2023, s1: 9558, s2: 85502, s3: 5187510 }, { year: 2024, s1: 8760, s2: 43154, s3: 4957746 }],
  },
  {
    id: 'shein', name: 'Shein', parentCompany: 'SHEIN Group', category: 'Fast Fashion', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Includes use-phase per current source note', comparability: 'Not directly comparable with narrower Scope 3 boundaries', lastVerified: '10 Jul 2026',
    source: 'SHEIN 2024 Sustainability & Social Impact Report', sourceUrl: 'https://www.sheingroup.com/wp-content/uploads/2025/06/SHEIN-2024-Sustainability-and-Social-Impact-Report-Final-14-June.pdf',
    history: [{ year: 2023, s1: 6553, s2: 25788, s3: 18122772 }, { year: 2024, s1: 4216, s2: 26695, s3: 20443652 }],
  },
  {
    id: 'nike', name: 'Nike', parentCompany: 'NIKE, Inc.', category: 'Sportswear', reportingPeriod: 'Fiscal year ended May',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'FY24 NIKE, Inc. Sustainability Data', sourceUrl: 'https://media.about.nike.com/files/460d3198-9609-4f5b-b18c-d4e7aa570bff/FY24_NIKE,-Inc.-Sustainability-Data.pdf',
    history: [{ year: 2023, s1: 51726, s2: 11340, s3: 9437000 }, { year: 2024, s1: 57390, s2: 12120, s3: 8196965 }],
  },
  {
    id: 'adidas', name: 'Adidas', parentCompany: 'adidas AG', category: 'Sportswear', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Adidas Annual Report 2024', sourceUrl: 'https://report.adidas-group.com/2024/en/group-management-report-sustainability-statement/esrs-e1-climate-change/metrics-and-targets.html',
    history: [{ year: 2023, s1: 21774, s2: 159000, s3: 5925000, note: 'Scope 2 MB 2023 estimated in current workbook' }, { year: 2024, s1: 20844, s2: 114970, s3: 6243471 }],
  },
  {
    id: 'gucci', name: 'Gucci', parentCompany: 'Kering', category: 'Luxury', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Gucci Equilibrium Impact Report 2024', sourceUrl: 'https://www.gucci.com/componentsfront/_public/equilibrium/impact-report/GUCCI_Equilibrium_2024impactreport.pdf',
    history: [{ year: 2023, s1: 12188, s2: 4575, s3: 1086247 }, { year: 2024, s1: 12454, s2: 5081, s3: 848565 }],
  },
  {
    id: 'prada', name: 'Prada Group', parentCompany: 'Prada Group', category: 'Luxury', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Prada Group Sustainability Report 2024', sourceUrl: 'https://www.pradagroup.com/content/dam/pradagroup/documents/Responsabilita_sociale/2025/Report-CSR-2024/E_2024%20Sustainability%20Report.pdf',
    history: [{ year: 2023, s1: 6809, s2: 4769, s3: 294970 }, { year: 2024, s1: 5704, s2: 4522, s3: 293018 }],
  },
  {
    id: 'burberry', name: 'Burberry', parentCompany: 'Burberry Group', category: 'Luxury', reportingPeriod: 'FY2024/25 for 2024 website label',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Burberry FY 2024/25 TCFD & Sustainability Disclosures', sourceUrl: 'https://www.burberryplc.com/content/dam/burberryplc/corporate/2024-updates/environmental-and-social-responsibility.pdf',
    history: [{ year: 2023, s1: 4057, s2: 12975, s3: 377000 }, { year: 2024, s1: 1470, s2: 16347, s3: 369861 }],
  },
  {
    id: 'hermes', name: 'Hermès', parentCompany: 'Hermès International', category: 'Luxury', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Hermès International climate disclosures', sourceUrl: 'https://finance.hermes.com/en/climate/',
    history: [{ year: 2023, s1: 12800, s2: 9200, s3: 643800 }, { year: 2024, s1: 17800, s2: 2700, s3: 731900 }],
  },
  {
    id: 'kering', name: 'Kering Group', parentCompany: 'Kering', category: 'Luxury', reportingPeriod: 'Calendar year',
    scope3Boundary: 'Company-reported Scope 3; category boundary audit pending', comparability: 'Provisional cross-brand comparison', lastVerified: '10 Jul 2026',
    source: 'Kering 2024 Activity Report', sourceUrl: 'https://ddd.uab.cat/pub/infanu/239915/iaKERINGa2024ieng.pdf',
    history: [{ year: 2023, s1: 31622, s2: 12729, s3: 2508318 }, { year: 2024, s1: 31052, s2: 12428, s3: 2116428 }],
  },
]

export const latestFor = (brand) => brand.history[brand.history.length - 1]
export const total12 = (row) => row.s1 + row.s2
export const totalAll = (row) => total12(row) + row.s3

export const INSIGHTS = [
  {
    mark: '01',
    title: 'Scope 3 dominates the footprint',
    body: 'For every tracked brand with complete 2024 data, value-chain emissions account for the overwhelming majority of reported greenhouse-gas emissions.',
  },
  {
    mark: '02',
    title: 'Shein has the highest reported Scope 3 total',
    body: 'Shein reports 20.4M tCO₂e of Scope 3 emissions for 2024, but its boundary includes use-phase emissions, so direct comparisons need care.',
  },
  {
    mark: '03',
    title: 'Nike reported a sharp Scope 3 decline',
    body: 'Nike’s reported Scope 3 emissions fell from 9.44M tCO₂e in 2023 to 8.20M tCO₂e in 2024, a decline of roughly 13%.',
  },
  {
    mark: '04',
    title: 'H&M cut operational emissions year on year',
    body: 'H&M’s combined Scope 1 and market-based Scope 2 emissions fell from 55,262 tCO₂e in 2023 to 41,655 tCO₂e in 2024, a decline of about 25%.',
  },
]
