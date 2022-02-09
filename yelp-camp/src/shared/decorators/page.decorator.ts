import { applyDecorators, Render } from "@nestjs/common";

export const Page = (pageName: string) => applyDecorators(Render(`pages/${pageName}`));
