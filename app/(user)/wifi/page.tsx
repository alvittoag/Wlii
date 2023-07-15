// ** Import Components
import Card from "@/components/card/Card";
import HeaderPage from "@/components/header/HeaderPage";

// ** Import Other
import { IWifi } from "@/schema/Wifi";
import { getClient } from "@/services/client";
import { queryWifi } from "@/services/query/get";

const query = queryWifi;

const Wifi = async () => {
  const { data } = await getClient().query<{ wifi: IWifi[] }>({
    query,
  });

  return (
    <div className="space-y-6">
      <HeaderPage title="Daftar Wifi" title_modal="Tambah Data Wifi" />

      <div className="grid grid-cols-4 px-6 gap-10">
        {data.wifi?.map((wifi) => (
          <Card key={wifi.id} data={wifi} />
        ))}
      </div>
    </div>
  );
};

export default Wifi;
