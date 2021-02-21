import { ButtonGroup, ToggleButton } from "react-bootstrap";

const Currency =({currency,toggleCurrencyUSD,toggleCurrencyUAH})=> {
    return (
      <>
      <h5 >Currency</h5>
        <ButtonGroup toggle>
         
            <ToggleButton
              key={1}
              type="radio"
              variant="primary"
              name="radio"
              value="USD"
              checked={currency === "USD"}
              onChange={(e) => toggleCurrencyUSD(e.currentTarget.value)}
            >
            USD
            </ToggleButton>
            <ToggleButton
              key={2}
              type="radio"
              variant="primary"
              name="radio"
              value="UAH"
              checked={currency === "UAH"}
              onChange={(e) => toggleCurrencyUAH(e.currentTarget.value)}
            >
            UAH
            </ToggleButton>
       
        </ButtonGroup>
      </>
    );
}

export default Currency;