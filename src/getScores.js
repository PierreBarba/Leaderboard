const getScores = async () =>{
    try {
      const result = await fetch(
        `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PierreGamePsp99/scores`,
      );
      const data = await result.json();
      return (data);
    } catch (error) {
      return error;
    }
  };
  
  export default getScores;