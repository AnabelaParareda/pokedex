declare module "*.module.css" {
    const classes: {
        input: string | undefined;
        header: string | undefined; (key: string): string 
};
    export default classes; 
}
