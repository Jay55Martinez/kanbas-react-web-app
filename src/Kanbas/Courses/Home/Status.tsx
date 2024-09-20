export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <button>Unpublish</button> <button>Publish</button>
        {/*list of buttons under the Unpublish and Publish buttons*/}
        <ul>
          <dt><button>Import Existing Content</button></dt>  
          <dt><button>Import from Commons</button></dt>
          <dt><button>Choose Home Page</button></dt>
          <dt><button>View Course Stream</button></dt>
          <dt><button>New Announcement</button></dt>
          <dt><button>New Analytics</button></dt>
          <dt><button>View Course Notifications</button></dt>
        </ul>
      </div>
  );
}
  