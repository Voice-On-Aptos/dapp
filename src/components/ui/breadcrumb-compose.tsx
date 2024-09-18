import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface PathProps {
  href: string;
  label: string;
}

interface Props {
  basePath?: PathProps;
  prevPaths?: PathProps[];
  activePath: string;
}

const RBreadcrumb = ({ basePath, prevPaths, activePath }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={basePath?.href || "/communities"}
            className="text-base lg:text-s20 capitalize text-dark-gray font-medium"
          >
            {basePath?.label ?? "Communities"}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-base lg:text-s20 text-dark-gray font-medium">
          /
        </BreadcrumbSeparator>
        {/* previous paths begin */}
        {prevPaths?.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={path?.href}
                className="text-base lg:text-s20 capitalize text-dark-gray font-medium"
              >
                {path?.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-base lg:text-s20 font-medium text-dark-gray">
              /
            </BreadcrumbSeparator>
          </React.Fragment>
        ))}

        {/* previous paths end */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-base capitalize lg:text-s20 font-medium text-mako">
            {activePath}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default RBreadcrumb;
