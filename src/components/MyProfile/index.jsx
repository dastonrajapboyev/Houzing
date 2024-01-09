import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import nouser from "../../assets/images/no-user-image.gif";
import { useQuery } from "react-query";
import { message } from "antd";
import useRequest from "../../hooks/useRequest";
const MyProfile = () => {
  const navigate = useNavigate();
  const request = useRequest();
  const { search } = useLocation();

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully deleted");
          refetch();
        }
      }
    );
  };

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || nouser}
          />
          <User $flex>
            <div className="subtitle">
              {data.country}, {data.address}
            </div>
            <div className="info">
              {data.city}, {data.region}
            </div>
            <del>
              <div className="info">$ {data.price}</div>
            </del>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For Sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Build",
      render: (data) => <span> {data.houseDetails.yearBuilt}</span>,
      key: "yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span> {data.user.email}</span>,
      key: "user.email",
    },
    {
      title: "Price",
      render: (data) => <span> $ {data.salePrice}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Action",
      key: "user.email",
      width: 100,
      render: (data) => {
        return (
          <User>
            <Icons.Edit />
            <Icons.Delete onClick={() => onDelete(data.id)} />
          </User>
        );
      },
    },
  ];
  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>
        <div style={{ marginLeft: "auto" }} className="title">
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            Add New House
          </Button>
        </div>
      </User>
      <Container>
        <AntTable
          dataSource={data?.data.map((item) => ({
            ...item,
            key: item.id,
          }))}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;
