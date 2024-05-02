import React, { useState } from "react";
import {
  handleDelete,
  handleSaveEdit,
  handleSavePost,
} from "../../../components/ADEhandler/HandleADE.jsx";
import useData from "../../../Hooks/Usedata.jsx";
import TitleModal from "../../../packages/TitleModal.jsx";
import CustomCard from "../../../components/CardForm/CustomCard.jsx";
import TableAppearance from "./TableAppearance.jsx";

function ManagePageAppearance() {
  const [openTitleModalId, setOpenTitleModalId] = useState(null);
  const [PostTitle, setPostTitle] = useState("");
  const [PostItemId, setPostItemId] = useState(null);
  const [openAddModalId, setOpenAddModalId] = useState(null);
  const [saving, setSaving] = useState(false);
  const { data, isLoading, error, refetchData } = useData(
    "https://6613263953b0d5d80f66e461.mockapi.io/data",
    setOpenTitleModalId,
    setOpenAddModalId
  );

  const handleEditButtonClick = (item) => {
    setOpenTitleModalId(true);
    setPostTitle(item.Title);
    setPostItemId(item.id);
  };

  const handleSaveEditOrPost = async (whichone) => {
    setSaving(true);

    if (whichone) {
      await handleSavePost(refetchData, PostTitle, setPostTitle);
    } else {
      await handleSaveEdit(
        PostItemId,
        refetchData,
        PostTitle,
        setPostItemId,
        setPostTitle
      );
    }

    setTimeout(() => {
      setSaving(false);
    }, 500);
  };

  return (
    <div className="mt-10 flex flex-col justify-end md:flex-row md:items-start mr-18">
      <div className="md:w-1/4">
        <div className=" space-y-10">
          <h1 className="text-3xl ml-14 mt-1 text-white italic">Posts ..</h1>
          <CustomCard
            image="https://img.freepik.com/premium-vector/new-post-neon-sign-template_77399-531.jpg"
            p1="Create new post "
            inerp="create"
            click={() => setOpenAddModalId(true)}
            className="bg-white rounded-lg shadow-md"
          />
          <CustomCard
            image="https://img.freepik.com/premium-vector/new-post-neon-sign-template_77399-531.jpg"
            p1="Create new post "
            inerp="create"
            click={() => setOpenAddModalId(true)}
            className="bg-white rounded-lg shadow-md"
          />
          <CustomCard
            image="https://img.freepik.com/premium-vector/new-post-neon-sign-template_77399-531.jpg"
            p1="Create new post "
            inerp="create"
            click={() => setOpenAddModalId(true)}
            className="bg-white rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="md:w-7/12">
        <div className="xl:px-20 px-8 mb-10">
          <h1 className="text-3xl text-white italic">Data Table</h1>
        </div>
        <div className="xl:px-20 px-8">
          <TableAppearance
            data={data}
            refetchData={refetchData}
            handleEditButtonClick={handleEditButtonClick}
            handleDelete={handleDelete}
            isLoading={isLoading}
            error={error}
          />
        </div>
        <div>
          {(openAddModalId || openTitleModalId) && (
            <TitleModal
              open={openAddModalId ? openAddModalId : openTitleModalId}
              setOpenTitleModalId={
                openAddModalId ? setOpenAddModalId : setOpenTitleModalId
              }
              title={PostTitle}
              setPostTitle={setPostTitle}
              handleSave={() => handleSaveEditOrPost(openAddModalId)}
              saving={saving}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ManagePageAppearance;
