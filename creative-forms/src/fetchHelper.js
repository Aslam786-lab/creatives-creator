export const fetchColors = async (setColors) => {
    try {
      const response = await fetch(
        "https://random-flat-colors.vercel.app/api/random?count=6"
      );
      const data = await response.json();

      setColors(data.colors);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };