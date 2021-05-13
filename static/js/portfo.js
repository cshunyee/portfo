const projectList = ['#!projects', '#!travel', '#!website-template', '#!video-collection']

$(document).on('click', 'a', function() {
  // Activate navbar
  $("#navbar").find('.active').removeClass('active')
  $(this).addClass('active');
  if ($(this).closest('ul').attr('id') == 'worksNav') {
    $('a[href*="#!projects"]').addClass('active')
  }

  // Switch navbar class
  if ($(this).attr('href') == '#!') {
    $("#navbar").removeClass('navbar-default')
    $("#navbar").addClass('navbar-inverse')
  } else {
    $("#navbar").removeClass('navbar-inverse')
    $("#navbar").addClass('navbar-default')
  }

  // Toggle sub-navbar
  if (projectList.includes($(this).attr('href'))) {
    $('#projectsNav').find('li').show();
  } else {
    $('#projectsNav').find('li').hide();
  }
})

function refresh() {
  $(document).ready(function() {
    // Activate the navbar
    currentPage = window.location.href.split('/').pop();
    $("#navbar").find('.active').removeClass('active')
    if (currentPage) {
      $(`a[href*='#!${currentPage}']`).addClass('active');
    } else {
      $("a[title*='home'").addClass('active');
    }


    // Switch navbar class
    if (`#!${currentPage}` == '#!' || `#!${currentPage}` == ' ') {
      $("#navbar").removeClass('navbar-default')
      $("#navbar").addClass('navbar-inverse')
    } else {
      $("#navbar").removeClass('navbar-inverse')
      $("#navbar").addClass('navbar-default')
    }

    // Toggle sub-navbar
    if (projectList.includes(`#!${currentPage}`)) {
      $('#projectsNav').find('li').show();
    } else {
      $('#projectsNav').find('li').hide();
    }
  })
}
