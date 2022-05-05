import React from "react";
import { useState }  from "react";

function Leave() {
    const [days, setDays] = useState("");
    const [sdate, setStdate] = useState("");
    const [edate, setEddate] = useState("");
  return (
  <div>
      <form>
      <label>Enter Number Days:
        <input
          type="text" 
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </label>
      <label>Enter Starting Date:
        <input
          type="date" 
          value={sdate}
          onChange={(e) => setStdate(e.target.value)}
        />
      </label>
      <label>Enter End Date:
        <input
          type="date" 
          value={edate}
          onChange={(e) => setEddate(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  </div>
  )
}
  

export default Leave;
