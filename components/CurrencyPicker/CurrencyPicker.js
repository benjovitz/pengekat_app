import { Picker } from "@react-native-picker/picker"
import styles from "../../utils/styles.js"

export default CurrencyPicker = ({currency, setCurrency}) => {
    return(
    <Picker
    selectedValue={currency}
    onValueChange={(itemValue) => setCurrency(itemValue)}
    >
    <Picker.Item style={styles.pickerItem} label={"Dansk Krone (DKK)"} value={"DKK"} />
    <Picker.Item style={styles.pickerItem} label={"Euro (EUR)"} value={"EUR"} />
    <Picker.Item style={styles.pickerItem} label={"US Dollar (USD)"} value={"USD"} />
    <Picker.Item style={styles.pickerItem} label={"Japansk Yen (JPY)"} value={"JPY"} />
    <Picker.Item style={styles.pickerItem} label={"Bulgarsk Lev (BGN)"} value={"BGN"} />
    <Picker.Item style={styles.pickerItem} label={"Tjekkisk Koruna (CZK)"} value={"CZK"} />
    <Picker.Item style={styles.pickerItem} label={"Britisk Pund Sterling (GBP)"} value={"GBP"} />
    <Picker.Item style={styles.pickerItem} label={"Ungarsk Forint (HUF)"} value={"HUF"} />
    <Picker.Item style={styles.pickerItem} label={"Polsk Zloty (PLN)"} value={"PLN"} />
    <Picker.Item style={styles.pickerItem} label={"Rumænsk Leu (RON)"} value={"RON"} />
    <Picker.Item style={styles.pickerItem} label={"Svensk Krone (SEK)"} value={"SEK"} />
    <Picker.Item style={styles.pickerItem} label={"Schweizisk Franc (CHF)"} value={"CHF"} />
    <Picker.Item style={styles.pickerItem} label={"Islandsk Króna (ISK)"} value={"ISK"} />
    <Picker.Item style={styles.pickerItem} label={"Norsk Krone (NOK)"} value={"NOK"} />
    <Picker.Item style={styles.pickerItem} label={"Kroatisk Kuna (HRK)"} value={"HRK"} />
    <Picker.Item style={styles.pickerItem} label={"Russisk Rubel (RUB)"} value={"RUB"} />
    <Picker.Item style={styles.pickerItem} label={"Tyrkisk Lira (TRY)"} value={"TRY"} />
    <Picker.Item style={styles.pickerItem} label={"Australsk Dollar (AUD)"} value={"AUD"} />
    <Picker.Item style={styles.pickerItem} label={"Brasiliansk Real (BRL)"} value={"BRL"} />
    <Picker.Item style={styles.pickerItem} label={"Canadisk Dollar (CAD)"} value={"CAD"} />
    <Picker.Item style={styles.pickerItem} label={"Kinesisk Yuan (CNY)"} value={"CNY"} />
    <Picker.Item style={styles.pickerItem} label={"Hong Kong Dollar (HKD)"} value={"HKD"} />
    <Picker.Item style={styles.pickerItem} label={"Indonesisk Rupiah (IDR)"} value={"IDR"} />
    <Picker.Item style={styles.pickerItem} label={"Israelsk Ny Shekel (ILS)"} value={"ILS"} />
    <Picker.Item style={styles.pickerItem} label={"Indisk Rupee (INR)"} value={"INR"} />
    <Picker.Item style={styles.pickerItem} label={"Sydkoreansk Won (KRW)"} value={"KRW"} />
    <Picker.Item style={styles.pickerItem} label={"Mexicansk Peso (MXN)"} value={"MXN"} />
    <Picker.Item style={styles.pickerItem} label={"Malaysisk Ringgit (MYR)"} value={"MYR"} />
    <Picker.Item style={styles.pickerItem} label={"New Zealandsk Dollar (NZD)"} value={"NZD"} />
    <Picker.Item style={styles.pickerItem} label={"Filippinsk Peso (PHP)"} value={"PHP"} />
    <Picker.Item style={styles.pickerItem} label={"Singapore Dollar (SGD)"} value={"SGD"} />
    <Picker.Item style={styles.pickerItem} label={"Thailandsk Baht (THB)"} value={"THB"} />
    <Picker.Item style={styles.pickerItem} label={"Sydafrikansk Rand (ZAR)"} value={"ZAR"} />
    </Picker>
    )
}