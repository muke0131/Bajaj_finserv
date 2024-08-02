const getOpCode=(req, res) => {
    res.status(200).json({ operation_code: 1 });
  }

const postData=(req, res) => {
    const { data } = req.body;
  
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false });
    }

    function isAlphabet(char) {
        return /^[a-zA-Z]$/.test(char);
    }
    const numbers = data.filter(item => !isNaN(parseFloat(item)));
    const alphabets = data.filter(item => isAlphabet(item));
    const newAlpha=structuredClone(alphabets);
    const highestAlphabet = newAlpha.length > 0 ? [newAlpha.sort().pop()] : [];
  
    res.json({
      is_success: true,
      user_id: "Mukul_Nayak_18112004",
      email: "ms0690@srmist.edu.in",
      roll_number: "RA2111026030084",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet
    });
  }

module.exports={getOpCode,postData};