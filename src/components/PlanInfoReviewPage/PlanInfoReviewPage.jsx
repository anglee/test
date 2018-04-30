import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routeMap } from "../../constants/pages/routes";
import pages from "../../constants/pages/pages";
import { stepsMap } from "../../constants/pages/steps";
import StepNav from "../common/StepNav/StepNav";

const PlanInfoReviewPage = () => {
  const currentPage = pages.planInfoReview;
  return (
    <main>
      <StepNav currentStep={stepsMap[currentPage]} />
      <h1>Plan Information</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </p>
      <article>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus obcaecati
          quisquam repudiandae ullam vel voluptatem! Adipisci, cumque dolor eligendi excepturi in
          incidunt libero molestiae molestias nihil officiis totam vel!
        </div>
        <div>
          Ad atque, recusandae. Ea, ipsam ipsum labore minus nihil non nostrum nulla, porro quis
          temporibus tenetur unde vitae, voluptates. Assumenda consequatur dolorem suscipit
          voluptas? Asperiores molestiae perspiciatis praesentium sint voluptas.
        </div>
        <div>
          A adipisci deserunt eaque maiores non obcaecati odit perferendis porro, sed voluptatum.
          Aliquam at corporis, culpa cum delectus dolor, dolorem eaque harum impedit ipsum, maxime
          molestiae nesciunt perspiciatis quisquam voluptatum.
        </div>
        <div>
          Ad animi consectetur, dicta dignissimos enim eos esse eum expedita facere fugit ipsam
          ipsum itaque iusto maiores maxime numquam pariatur quaerat quam quidem quis ratione
          tempore tenetur totam. Inventore, iste.
        </div>
        <div>
          Aliquid aperiam at beatae dignissimos distinctio doloribus expedita facilis harum iure
          odit quos repellat ut, veniam? Aliquam ex explicabo maxime vero voluptatem! Aut dicta
          eaque incidunt obcaecati odio porro voluptatum?
        </div>
      </article>
      <Button>
        <Link to={routeMap[currentPage].edit}>Edit</Link>
      </Button>
      <Button>
        <Link to={routeMap[currentPage].next}>Next</Link>
      </Button>
    </main>
  );
};

export default PlanInfoReviewPage;
