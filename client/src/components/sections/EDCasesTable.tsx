import { Search } from "lucide-react";
import { useState } from "react";

const edCases = [
  { court: "Rouse Avenue", title: "Deepak Talwar", ecir: "ECIR/HQ/02/17", number: "-" },
  { court: "Rouse Avenue", title: "Deepak Talwar", ecir: "ECIR/HQ/12/17", number: "-" },
  { court: "Rouse Avenue", title: "Deepak Talwar", ecir: "ECIR/HQ/10/17", number: "-" },
  { court: "Rouse Avenue", title: "Deepak Talwar", ecir: "ECIR/HQ/13/17", number: "ct complaint cases 24/2019" },
  { court: "Rouse Avenue", title: "Aditya Talwar", ecir: "ECIR/HQ/13/17", number: "-" },
  { court: "Rouse Avenue", title: "Advantage india", ecir: "ECIR/HQ/19/17", number: "CC-CORRUPTION CASES 19/2020" },
  { court: "Rouse Avenue", title: "Raj Kumar Jain and anr", ecir: "ECIR/116/DZ/2009", number: "ct complaint cases 64/2019" },
  { court: "Rouse Avenue", title: "D.K.Goel & Ors.", ecir: "ECIR/14/DLZO/2009", number: "ct complaint cases 27/2019" },
  { court: "Rouse Avenue", title: "Umer Madani", ecir: "ECIR/12/DLZO/2010", number: "ct complaint cases 38/2019" },
  { court: "Rouse Avenue", title: "M/s R K Associates and Hoteliers Pvt Ltd", ecir: "ECIR/22/DLZO/2016", number: "ct complaint cases 25/2019" },
  { court: "Rouse Avenue", title: "Bhushan Power and Steel Limited and ors", ecir: "ECIR/22/DLZO-1/02/2019", number: "ct complaint cases 01/2020" },
  { court: "Rouse Avenue", title: "Virbhadra Singh", ecir: "ECIR/HQ/02/HIU/2015", number: "ct complaint cases 12/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/293/DZ/2009", number: "ct complaint cases 50/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/278/DZ/2009", number: "ct complaint cases 48/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/277/DZ/2009", number: "ct complaint cases 47/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/294/DZ/2009", number: "ct complaint cases 49/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/295/DZ/2009", number: "ct complaint cases 194/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/310/DZ/2009", number: "ct complaint cases 195/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/285/DZ/2009", number: "ct complaint cases 196/2019" },
  { court: "Rouse Avenue", title: "H.B. Chaturvedi", ecir: "ECIR/286/DZ/2009", number: "ct complaint cases 197/2019" },
  { court: "Rouse Avenue", title: "Amarendra Dhari Singh @ A.D. Singh", ecir: "ECIR/22/DLZO-1/2021", number: "ct complaint cases 17/2021" },
  { court: "Rouse Avenue", title: "A K Reddy", ecir: "ECIR/01/DZ/2011", number: "ct complaint cases 29/2019" },
  { court: "Rouse Avenue", title: "M/s Occasion Silver Pvt. Ltd.", ecir: "ECIR/09/DZ-1/2017", number: "ct complaint cases 03/2021" },
  { court: "Rouse Avenue", title: "M/S. Era Infra Engineering Ltd", ecir: "ECIR/DLZO-1/4/2018", number: "ct complaint cases 04/2021" },
  { court: "Rouse Avenue", title: "Vikas Mishra & Ors", ecir: "ECIR/17/HIU/2020", number: "BAIL MATTERS 45/2021" },
  { court: "Rouse Avenue", title: "Vikas Mishra & Ors", ecir: "ECIR/17/HIU/2020", number: "CC-CORRUPTION CASES 24/2021" },
  { court: "Rouse Avenue", title: "M/s Tristar Enterprises and anr", ecir: "ECIR/06/DLZO/2013(AKS)", number: "ct complaint cases 35/2019" },
  { court: "Rouse Avenue", title: "Ashutosh Verma ors.", ecir: "ECIR/01/DZ/2013(A.D)", number: "ct complaint cases 53/2019" },
  { court: "Gurugram", title: "Ashok Soloman", ecir: "ECIR/01/HIU/2019", number: "COMA-COMPLAINT ACT 15/2021" },
  { court: "Saket", title: "Malvinder Mohan Singh", ecir: "ECIR/22/DLZO-II/05/2019", number: "ct complaint cases 01/2020" },
  { court: "Saket", title: "Shiv Murat Diwedi anr.", ecir: "ECIR/53/DLZO/2010", number: "SC-SESSIONS 6594/2016" },
  { court: "Saket", title: "Rohit Tandon & Ors.", ecir: "ECIR/18/DZ-II/2016", number: "SC-SESSIONS CASE 407/2017" },
  { court: "Saket", title: "Parshmal Lodha", ecir: "ECIR/14/DZ-II/2016", number: "SC-SESSIONS CASE 89/2017" },
  { court: "PHC", title: "Upender Rai", ecir: "ECIR/03/HIU/2018", number: "SC-SESSIONS CASE 259/2018" },
  { court: "PHC", title: "M/s Surya Vinayak Industries Ltd.", ecir: "ECIR/01/DZO-1/2015 AD", number: "CC-CORRUPTION CASES 23/2017" },
  { court: "PHC", title: "Muhammad Hafiq Saeed and ors", ecir: "ECIR/03/DLZO-II/2017", number: "ct complaint cases 67/2020" },
  { court: "PHC", title: "Mohd. Salman & Ors.", ecir: "ECIR/DZ-II/01/2019", number: "ct complaint cases 77/2020" },
  { court: "PHC", title: "Mohammad Shafi Shah", ecir: "ECIR/03/DLZO-II/2017", number: "SC-SESSIONS CASE 176/2020" },
  { court: "PHC", title: "Gagan Dhawan", ecir: "ECIR/HQ/17/17", number: "CC-CORRUPTION CASES 32/2017" },
  { court: "PHC", title: "Rujira Banerjee", ecir: "ECIR/17/HIU/2020", number: "Ct Cases - 1186/2021" },
  { court: "PHC", title: "Vanay Mishra & Ors", ecir: "ECIR/17/HIU/2020", number: "CR Rev/39/2021" },
  { court: "PHC", title: "Niraj Singh", ecir: "ECIR/17/HIU/2020", number: "Ct Cases - 1198/2021" },
  { court: "PHC", title: "Nitin Jayantilal Sandesara and ors.", ecir: "ECIR/HQ/17/17", number: "M - MISC. Cases 30/2022" },
  { court: "PHC", title: "Sajjan Kumar", ecir: "ECIR/09/DZO-1/2019", number: "Ct Cases - 115/2021" },
  { court: "Rouse Avenue", title: "Sh. Pankaj Jain", ecir: "ECIR/DLZO-1/43/2021", number: "Ct Cases - 4/2022" },
  { court: "Rouse Avenue", title: "Sh. Pankaj Jain", ecir: "ECIR/DLZO-1/43/2021", number: "CR Rev/26/2022" },
  { court: "Rouse Avenue", title: "Sh. Vivek Gahlaut", ecir: "ECIR/DLZO-1/43/2021", number: "Ct Cases - 3/2022" },
  { court: "Rouse Avenue", title: "Sh. Anmol Awasthi", ecir: "ECIR/DLZO-1/43/2021", number: "Ct Cases - 2/2022" },
  { court: "Rouse Avenue", title: "Sh. Sushil Kumar Paschisia", ecir: "ECIR/DLZO-1/43/2021", number: "Ct Cases - 5/2022" },
  { court: "Tis Hazari", title: "Jyotsna Suri", ecir: "fama", number: "Ct. Cases 1492/2021 CR Rev/427/2022" },
  { court: "Rouse Avenue", title: "Md. Enamul Haque", ecir: "ECIR/KLZO/41/2020", number: "Ct Cases - 13/2022" },
  { court: "Rouse Avenue", title: "Satish Kumar", ecir: "ECIR/KLZO/41/2020", number: "-" },
  { court: "Rouse Avenue", title: "D.K.Shivakumar and Ors.", ecir: "ECIR/HQ/04/2018", number: "Ct Cases - 17/2022" },
  { court: "PHC", title: "Sh. Lalita Mishra", ecir: "ECIR/17/HIU/2020", number: "Ct Cases - 1478/2022" },
  { court: "PHC", title: "Sh. Tej Bahadur Mishara", ecir: "ECIR/17/HIU/2020", number: "Ct Cases - 1479/2022" },
  { court: "Rouse Avenue", title: "Gurupada Maji", ecir: "ECIR/17/HIU/2020", number: "BAIL MATTERS/176/2022" },
  { court: "Rouse Avenue", title: "M/S Shree Bankey Behari Exports Ltd.", ecir: "ECIR/DLZO-1/06/2020", number: "Ct Cases - 25/2022" },
  { court: "Rouse Avenue", title: "Md Mehedi Hasan", ecir: "ECIR/KLZO/41/2020", number: "Ct Cases - 1763/2022" },
  { court: "Rouse Avenue", title: "Humayun Kabir", ecir: "ECIR/KLZO/41/2020", number: "Ct Cases - 1766/2022" },
  { court: "Rouse Avenue", title: "Jahangir Alam", ecir: "ECIR/KLZO/41/2020", number: "Ct Cases - 1767/2022" },
  { court: "Rouse Avenue", title: "Sanjay Jain", ecir: "ECIR/DLZO-1/43/2021", number: "-" },
  { court: "Rouse Avenue", title: "Shri Gian Chand", ecir: "ECIR/DLZO-1/19/2020", number: "-" },
  { court: "PHC", title: "M/S Unickon Securities Pvt. Ltd And Ors", ecir: "ECIR/DLZO-1/10/2018", number: "Ct Cases - 129/2022" }
];

export default function EDCasesTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCases = edCases.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.court.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.ecir.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Enforcement Directorate <span className="text-accent">(ED)</span> Cases
            </h2>
            <p className="text-black/70 text-lg leading-relaxed">
              An extensive record of high-profile Enforcement Directorate matters 
              handled across various courts, demonstrating specialized expertise in 
              complex financial and economic offense litigation.
            </p>
          </div>
          
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-black/40" />
            </div>
            <input
              type="text"
              placeholder="Search cases, courts, or ECIR..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 sticky top-0 z-10 border-b border-black/10 shadow-sm">
                <tr>
                  <th className="py-4 px-6 font-semibold text-black/80 w-1/4">Court</th>
                  <th className="py-4 px-6 font-semibold text-black/80 w-1/3">Case Title</th>
                  <th className="py-4 px-6 font-semibold text-black/80 w-1/4">ECIR</th>
                  <th className="py-4 px-6 font-semibold text-black/80">Case Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {filteredCases.length > 0 ? (
                  filteredCases.map((c, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-gray-50/80 transition-colors group"
                    >
                      <td className="py-4 px-6 text-black/70 group-hover:text-black transition-colors">{c.court}</td>
                      <td className="py-4 px-6 font-medium text-black/90 group-hover:text-accent transition-colors">{c.title}</td>
                      <td className="py-4 px-6 text-black/60 font-mono text-sm">{c.ecir}</td>
                      <td className="py-4 px-6 text-black/60">{c.number}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-12 text-center text-black/50">
                      No cases found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 px-6 py-4 border-t border-black/10 flex justify-between items-center text-sm text-black/60">
            <span>Showing {filteredCases.length} records</span>
          </div>
        </div>
      </div>
    </section>
  );
}
