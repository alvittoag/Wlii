// ** Import Components
import HeaderPage from "@/components/header/HeaderPage";
import Table from "@/components/table/Table";
import RowPaket from "@/components/table/row/RowPaket";

// ** Import Other
import { IPackage } from "@/schema/Package";
import { getClient } from "@/services/client";
import { queryPackage } from "@/services/query/get";
import { TableHeadPaket } from "@/constants";

const query = queryPackage;

const Paket = async () => {
  const { data } = await getClient().query<{ package: IPackage[] }>({
    query,
  });

  return (
    <main>
      <HeaderPage title="Daftar Paket" title_modal="Tambah Data Paket" />

      <div className="px-7 py-8">
        <Table tableHead={TableHeadPaket}>
          {data.package?.map((data) => (
            <RowPaket key={data.id} data={data} />
          ))}
        </Table>
      </div>
    </main>
  );
};

export default Paket;
