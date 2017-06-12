export interface ITheme {
    backColor:string;
    foreColor:string;
    customerLogoUrl:string;
    customerSiteUrl:string;
}

export const defaultTheme:ITheme = {
    backColor: '#000',
    foreColor: '#fff',
    customerLogoUrl: './src/images/ecorp-logo.png',
    customerSiteUrl: 'www.evil-corp-usa.com'
}
