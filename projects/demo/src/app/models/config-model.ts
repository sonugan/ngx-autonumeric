export interface ConfigModel {
    option: string;
    type: "select" | "number";
    options?: any[];
    description: string;
    default?: any; 
}