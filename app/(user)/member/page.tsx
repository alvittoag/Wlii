// ** Import Components
import HeaderPage from "@/components/header/HeaderPage";
import Table from "@/components/table/Table";
import RowMember from "@/components/table/row/RowMember";

// ** Import Other
import { IMember } from "@/schema/Member";
import { getClient } from "@/services/client";
import { queryMember } from "@/services/query/get";

const query = queryMember;

const Member = async () => {
  const { data } = await getClient().query<{ member: IMember[] }>({
    query,
  });

  return (
    <main>
      <HeaderPage title="Daftar Member" title_modal="Tambah Data Member" />

      <div className="px-7 py-8">
        <Table tableHead={tableHead}>
          {data.member.map((mem) => (
            <RowMember key={mem.id} data={mem} />
          ))}
        </Table>
      </div>
    </main>
  );
};

export default Member;

const tableHead = [
  "Nama Pengguna",
  "Paket Pilihan",
  "Masa Aktif",
  "Kode Member",
  "",
];
