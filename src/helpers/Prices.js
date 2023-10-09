import CONSTANTS from "../Constants/Constants";

export const markup = (price, percentage=CONSTANTS.prices.markup_percentage) => {
    let f_price=parseFloat(price);
    let markup = ((percentage/100) * f_price);
    let new_price = f_price + markup;
    return {
        percentage,
        markup,
        f_price,
        new_price,
    }
}