"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryCollumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";
import { useCallback, useEffect } from "react";

interface CategoryClientProps {
  data: CategoryCollumn[];
}

export const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();
  //podemos passar qualquer valor após /${params.storeId}/billboards/qualquervaloraqui
  // e ele navegará para /id/billboards/....
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="h4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};
