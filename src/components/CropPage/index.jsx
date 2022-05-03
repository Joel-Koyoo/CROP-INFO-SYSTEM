import React from "react";
import Layout from "../Layout";
import { cropsList } from "../../assets/data";
import "./CropPage.css";

const CropPage = ({ location }) => {
  const query = new URLSearchParams(location.search);
  const cropId = parseInt(query.get("crop"));
  console.log(cropId);
  return (
    <Layout>
      {cropsList.map(
        (crop) =>
          cropId === crop.id && (
            <div className="CropPage">
              <h1 className="CropHeading">{crop.name}</h1>
              <p className="CropDescription">{crop.details}</p>

              <h1>Images of the plant/Picha za Mimea</h1>
              <div className="CropImagesSection">
                {crop.images.map((image) => (
                  <img src={image.url} alt={crop.name} />
                ))}
              </div>

              <div className="CropInfoSection">
                <div className="CropDiseases">
                  <h2>Diseases/Magonjwa</h2>
                  <p>Mimea yaieza kumbwa na Magonjwa kama:</p>
                  <div className="DiseaseList">
                    {crop.diseases.map((disease) => (
                      <div>
                        <h2>{disease.name} </h2>
                        <h3>{disease.imageDeta}</h3>
                        <h3>{disease.image}</h3>
                        <h3>{disease.detailsDeta}</h3>
                        <p>{disease.details}</p>
                        <h3>{disease.solutionDeta}</h3>
                        <p>{disease.solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="detailsNam">{crop.detailsNam}</div>
              <div className="details">{crop.details}</div>

              <div className="PlantingSteps">
                <h1>Jinsi ya Kupanda</h1>
                <div className="StepsList">
                  {crop.steps.map((step) => (
                    <p>{step.step}</p>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </Layout>
  );
};

export default CropPage;
