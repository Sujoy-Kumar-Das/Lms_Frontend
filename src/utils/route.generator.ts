import { IDashboardRoute } from "@/interface/IDashboardItem";
import { IUserRoles } from "@/interface/user.roles.interface";

const routeGenerator = (
  routesPaths: IDashboardRoute[],
  role: IUserRoles | undefined
) => {
  return routesPaths.reduce((acc: IDashboardRoute[], item: IDashboardRoute) => {
    if (item.access?.includes(role as IUserRoles)) {
      acc.push({ text: item.text, link: item.link, icon: item.icon });
    }
    return acc;
  }, []);
};

export default routeGenerator;
