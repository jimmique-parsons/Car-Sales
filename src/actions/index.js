export const ADD_FEATURE = "ADD_FEATURE";
 export const REMOVE_FEATURE = "REMOVE_FEATURE";
 export const UPDATE_ADDITIONAL_PRICE = "UPDATE_ADDITIONAL_PRICE";

 export const addFeature = feature => {
   return { type: ADD_FEATURE, payload: feature };
 };

 export const removeFeature = featureId => {
   return { type: REMOVE_FEATURE, payload: featureId };
 };

 export const updateAdditionalPrice = () => {
   return { type: UPDATE_ADDITIONAL_PRICE };
 };