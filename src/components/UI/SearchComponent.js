import { useState, useEffect } from "react";

function SearchComponent() {
  const [profileData, setprofileData] = useState([
    {
      key:"1",
      name: "Brian Kernighan",
      email: "brian@test.com",
      password: "password1",
      skills: ["AWK", "AMPL", "Unix"],
    },
    {
      key:"2",
      name: "Max Kanat-Alexander",
      email: "max@test.com",
      password: "password1",
      skills: ["Java", "Perl", "Apache", "Python"],
    },
    {
      key:"3",
      name: "Spruce Emmanuel",
      email: "new@test.com",
      password: "password1",
      skills: ["JavaScript", "Perl", "Apache", "Node.js"],
    },
  ]);
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["email", "name"]);
  // console.log(searchTerm);

  function search(items) {
    console.log("I'm in the search component tyylllllllllsjdbhfubedh")
    return items.filter((item) => {
      return searchTerm.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <main>
      <div>
        <h2>Profiles</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        {search(profileData).map((val) => {
          return (
            <div className="box" key={val.key} >
              <p>{val.name}</p>
              <p>{val.email}</p>
              {val.skills.map((skill) => {
                return <p>{skill}</p>;
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default SearchComponent;

// ReactDOM.render(<App />, document.getElementById("root"));
